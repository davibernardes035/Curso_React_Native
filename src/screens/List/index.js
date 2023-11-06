import * as React from 'react';
import {
  Button,
  Container,
  SubTitle,
  Title,
  TextButton,
  ContainerTitle,
  Line,
  ContainerList,
  TextTask,
  ContainerCheckList,
  ContainerTask,
  TextInputTask,
} from './styles';
import MoreWhite from '../../assets/MoreWhite.svg'

const List = ({navigation}) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Segunda Tela Davi List</Title>

        <SubTitle>0 de 0 Tarefas</SubTitle>
        <Line />
      </ContainerTitle>
      <ContainerList>
        <ContainerCheckList/>
        <TextTask>Curso React Native</TextTask>
      </ContainerList>
      <ContainerList>
        <ContainerCheckList/>
        <TextTask>Curso React Native</TextTask>
      </ContainerList>
      <ContainerTask>
        <TextInputTask placeholder='Tarefa'/>
        <Button>
          <MoreWhite/>
        </Button>
      </ContainerTask>
    </Container>
  );
};

export default List;
