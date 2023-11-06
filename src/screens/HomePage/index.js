import * as React from 'react';
import {
  Button,
  Container,
  ContainerButton,
  ContainerText,
  ContainerTitle,
  Line,
  SubTitle,
  Title,
  TextButton,
} from './styles';
import More from '../../assets/More.svg';

const HomePage = ({navigation}) => {
  return (
    <Container>
      <ContainerTitle>
        <Line />
        <ContainerText>
          <Title>Davi</Title>
          <SubTitle>List</SubTitle>
        </ContainerText>
        <Line />
      </ContainerTitle>
      <ContainerButton>
        <Button
          onPress={() => {
            navigation.navigate('List');
          }}>
          <More />
        </Button>
        <TextButton>Adicionar à lista</TextButton>
      </ContainerButton>
    </Container>
  );
};

export default HomePage;
