import React from 'react';
import {View, FlatList, Text} from 'react-native';
import data from '../../Data/data.json';
import {Title, SubTitle, TextNumber} from './styles'

const ListTasks = () => {

    const renderTastksCount = tasks => {
        const pendingTasks = tasks.filter(tasks => !tasks.lida).length;
        const completeTasks = tasks.filter(tasks => tasks.lida).length;

        return(
            <>
            <TextNumber>{pendingTasks}</TextNumber>
            <SubTitle>A fazer</SubTitle>
            <TextNumber>{completeTasks}</TextNumber>
            <SubTitle>Concluido</SubTitle>

            </>
        )
    }
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              width: 150,
              height: 250,
              backgroundColor: item.color,
              margin: 10,
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Title>{item.name}</Title>
            {renderTastksCount(item.tasks)}
          </View>
        )}></FlatList>
    </View>
  );
};

export default ListTasks;
