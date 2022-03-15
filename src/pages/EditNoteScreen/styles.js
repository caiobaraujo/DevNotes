import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const TextInput = styled.TextInput`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 20px;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  padding: 20px;
  font-size: 16px;
  color: #fff;
  background-color: #f00;
`;

export const SaveButton = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const SaveButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const CloseButton = styled.TouchableHighlight`
  margin-right: 15px;
`;

export const CloseButtonImage = styled.Image`
  width: 18px;
  height: 18px;
`;
