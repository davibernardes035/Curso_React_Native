import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import data from '../../Data/data.json';
import {Title, SubTitle, TextNumber} from './styles';
import {useNavigation} from '@react-navigation/native';

const ListTasks = () => {
  const navigation = useNavigation();

  const renderTastksCount = tasks => {
    const pendingTasks = tasks.filter(tasks => !tasks.lida).length;
    const completeTasks = tasks.filter(tasks => tasks.lida).length;

    return (
      <>
        <TextNumber>{pendingTasks}</TextNumber>
        <SubTitle>A fazer</SubTitle>
        <TextNumber>{completeTasks}</TextNumber>
        <SubTitle>Concluido</SubTitle>
      </>
    );
  };

  const handlesPress = item => {
    navigation.navigate('List', {listData: item});
  };

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              width: 150,
              height: 250,
              backgroundColor: item.color,
              margin: 10,
              alignItems: 'center',
              borderRadius: 8,
            }}
            onPress={() => handlesPress(item)}>
            <Title>{item.name}</Title>
            {renderTastksCount(item.tasks)}
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
};

export default ListTasks;
