import React from 'react';
import { Box, Title } from './styles';

export default ({ data, index, onPress }) => {
  const handleDeleteButton = () => {
    onPress(index);
  };
  return (
    <Box onPress={() => onPress(index)}>
      <Title>{data.titlle}</Title>
    </Box>
  );
};
