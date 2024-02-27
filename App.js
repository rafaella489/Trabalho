import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Rafaella({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O que eu quero que você faça??
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Evelyn"
          onPress={() => navigation.navigate('Evelyn')}
          color="#803000" // Personalize a cor conforme desejado
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Vinicius"
          onPress={() => navigation.navigate('Vinicius')}
          color="#308000" // Personalize a cor conforme desejado
        />
      </View>
    </View>
  );
}

function Evelyn() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A Evelyn é uma amiga verdadeira, sempre que eu precisar ela vai me ajudar.
      </Text>
      <h2>O que deve imitar:</h2>
      <Text style={styles.text}>
        Uma galinha.
      </Text>
    </View>
  );
}

function Vinicius() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Vinicius é insuportável de chato, mais é um bom amigo.
      </Text>
      <h2>O que deve imitar:</h2>
      <Text style={styles.text}>
        Imitar uma borboleta.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo para a tela
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20, // Adiciona um espaçamento horizontal para melhor legibilidade
  },
  buttonContainer: {
    width: '50%',
    marginBottom: 10,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Rafaella">
        <Stack.Screen name="Rafaella" component={Rafaella} />
        <Stack.Screen name="Evelyn" component={Evelyn} />
        <Stack.Screen name="Vinicius" component={Vinicius} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;