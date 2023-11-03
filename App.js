import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#000000', fontSize: 24, fontWeight: 'bold'}}>
        Curso React Native
      </Text>
      <View style=
      {{width:'80%', alignItems: 'center'}}>
        <TextInput
          style={{borderWidth: 2, borderRadius: 20, width: '100%',marginTop: 20, marginBottom: 20}}
          placeholder="Ecreva seu nome"></TextInput>

        <TouchableOpacity
          style={{
            width: 100,
            height: 50,
            backgroundColor: '#000000',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            console.log('Testando o botao');
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>
            Botao
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
