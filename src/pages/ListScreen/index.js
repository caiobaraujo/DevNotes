import React, { useLayoutEffect } from 'react';
import {
  Container,
  AddButton,
  AddButtonImage,
  Noteslist,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import NoteItem from '../../components/NoteItem';

export default () => {
  const navigation = useNavigation();

  const list = useSelector((state) => state.notes.list);
  console.log(list);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas Anotações',
      headerRight: () => (
        <AddButton
          underlayColor="tranparent"
          onPress={() => {
            navigation.navigate('EditNote');
          }}
        >
          <AddButtonImage source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, [navigation]);

  const handleNotePress = (index) => {
    navigation.navigate('EditNote', { key: index });
  };

  return (
    <Container>
      {list.length > 0 && (
        <Noteslist
          data={list}
          renderItem={({ item, index }) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {list.length === 0 && (
        <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma nota cadastrada</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};
