import * as React from 'react';
import {Button, Container, Title, TextButton} from './styles';

const HomePage = ({navigation}) => {
  return (
    <Container>
      <Title>Bem vindo a outra tela</Title>
      <Button
        onPress={() => {
          navigation.navigate('List');
        }}>
        <TextButton>Clique aqui</TextButton>
      </Button>
    </Container>
  );
};

export default HomePage;
