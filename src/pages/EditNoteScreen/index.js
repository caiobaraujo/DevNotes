import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  TextInput,
  BodyInput,
  SaveButtonImage,
  SaveButton,
  CloseButton,
  CloseButtonImage,
  DeleteButton,
  DeleteButtonText,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].titlle);
      setBody(list[route.params.key].body);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === 'new' ? 'Nova anotacao' : 'Editar anotacao',
      headerLeft: () => (
        <CloseButton underlayColor="tranparent" onPress={handleCloseButton}>
          <CloseButtonImage source={require('../../assets/close.png')} />
        </CloseButton>
      ),
      headerRight: () => (
        <SaveButton underlayColor="tranparent" onPress={handleSaveButton}>
          <SaveButtonImage source={require('../../assets/save.png')} />
        </SaveButton>
      ),
    });
  }, [status, title, body]);

  const handleCloseButton = () => {
    navigation.goBack();
  };

  const handleSaveButton = () => {
    if (title != '' && body != '') {
      if (status === 'edit') {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.key,
            titlle: title,
            body: body,
          },
        });
      } else {
        dispatch({
          type: 'ADD_NOTE',
          payload: {
            titlle: title,
            body: body,
          },
        });
      }
      navigation.goBack();
    } else {
      alert('Preencha todos os campos');
    }
  };

  const handleDeleteNoteButton = () => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: {
        key: route.params.key,
      },
    });
    navigation.goBack();
  };

  return (
    <Container>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Digite o titulo da anotacao"
        placeholderTextColor="#ccc"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={(text) => setBody(text)}
        placeholder="Digite o corpo da anotacao"
        placeholderTextColor="#ccc"
        multiline={true}
        textAlignVertical="top"
      />
      {status == 'edit' && (
        <DeleteButton underlayColor="#FF0000" onPress={handleDeleteNoteButton}>
          <DeleteButtonText>Excluir anotacao</DeleteButtonText>
        </DeleteButton>
      )}
    </Container>
  );
};
