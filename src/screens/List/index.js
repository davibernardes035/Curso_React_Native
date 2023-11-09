import React, {useState} from 'react';
import {FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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
import MoreWhite from '../../assets/MoreWhite.svg';

const List = ({route}) => {
  const {listData} = route.params;

  const [checkBox, setCheckBox] = useState(false);

  return (
    <Container>
      <ContainerTitle>
        <Title>Segunda Tela Davi List</Title>

        <SubTitle>
          {listData.tasks.filter(task => task.lida).length} de{' '}
          {listData.tasks.length} tarefas
        </SubTitle>
        <Line />
      </ContainerTitle>
      <FlatList
        data={listData.tasks}
        renderItem={({item}) => (
          <ContainerList>
            <CheckBox value={item.lida} onValueChange={setCheckBox} />
            <TextTask>{item.titleTask}</TextTask>
          </ContainerList>
        )}
      />
      <ContainerTask>
        <TextInputTask placeholder="Tarefa" />
        <Button>
          <MoreWhite />
        </Button>
      </ContainerTask>
    </Container>
  );
};

export default List;
