import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const HomePage = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#000000', fontSize: 28, fontWeight: 'bold'}}>
        Bem vindo a outra tela
      </Text>
    </View>
  );
};

export default HomePage;
