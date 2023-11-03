import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage/index';

function HomeScreen({navigation}) {
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
          navigation.navigate('HomePage')
        }}>
        <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'}}>
          Botao
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
