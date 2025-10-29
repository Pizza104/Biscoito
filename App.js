import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Integrantes from './integrantes';
import biscoitoFechado from './assets/biscoitoFechado.png';
import biscoitoAberto from './assets/biscoitoAberto.png';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [imagem, setImagem] = useState(biscoitoFechado);
  const [frase, setFrase] = useState("Abra o biscoito!");

  const abrirBiscoito = () => {
    setImagem(biscoitoAberto);
    setFrase("Você vai ter um ótimo dia!", "Algo");
  };

  const resetBiscoito = () => {
    setImagem(biscoitoFechado);
    setFrase("Abra o biscoito!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍪 Biscoito da Sorte 🍪</Text>
      <Image source={imagem} style={styles.biscoito} />
      <Text style={styles.frase}>{frase}</Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#f4a261' }]} onPress={abrirBiscoito}>
        <Text style={styles.buttonText}>Abrir Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#2a9d8f' }]} onPress={resetBiscoito}>
        <Text style={styles.buttonText}>Resetar Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#264653' }]} onPress={() => navigation.navigate('Integrantes')}>
        <Text style={styles.buttonText}>Integrantes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Integrantes" component={Integrantes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fefae0' // fundo suave
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#e76f51',
    textShadowColor: '#00000020',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  biscoito: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },
  frase: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#264653',
    fontStyle: 'italic',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 5,
    minWidth: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
