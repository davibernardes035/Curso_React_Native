import * as React from 'react';
import {Button, Container, Title, TextButton} from './styles';

const List = ({navigation}) => {
  return (
    <Container>
      <Title>Tela dois</Title>
      <Button
      onPress={() => {
        navigation.navigate('HomePage')
      }}>
        <TextButton>Sair</TextButton>
      </Button>
    </Container>
  );
};

export default List;
