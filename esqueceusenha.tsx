import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'expo-router';

export default function App() {
  const [novasenha, setnsenha] = useState('');
  const [confirmsenha, setcsenha] = useState('');
  const [email, setemail] = useState('');
  const navigator = useNavigation();
  const voltar = () => {
    console.log('Usuario esta voltando.');
      //navegar para a tela de login
      navigator.navigate("login");
    
  }
  const novapass = () => {
    console.log('Email:', email);
    console.log('Nova senha:', novasenha);
    console.log('Confirm nova senha:', confirmsenha);
    if(email == "" || confirmsenha == "" || novasenha == ""){
      Alert.alert(
        'ERRO!',
        'Email ou senha inválido.',
        [
          {text: 'OK', onPress: () => console.log('email ou senha do usuario invalido!')},
        ],
        {cancelable: false}
      );
    }
    
  };



  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Redefinir Senha</Text>
      </View>
      <View style={styles.inputView}>
      <TextInput
          style={styles.inputText}
          placeholder="Digite seu email.."
          placeholderTextColor="#fafafc"
          onChangeText={text => setemail(text)}
        />
        </View>
        
      <View style={styles.inputView}>
        <TextInput
        secureTextEntry
          style={styles.inputText}
          placeholder="Digite sua nova senha..."
          placeholderTextColor="#fafafc"
          onChangeText={text => setnsenha(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Confirme sua nova senha..."
          placeholderTextColor="#fafafc"
          onChangeText={text => setcsenha(text)}
        />
      </View>
      <TouchableOpacity style={styles.redefBtn} onPress={novapass}>
        <Text style={styles.redefText}>Redefinir</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.arrowButton} onPress={voltar}>
        <Icon name="arrow-left" size={30} color="#2c23ad" />
      </TouchableOpacity>
    <View>
      <Text style={styles.containertruck}>
      <Text style={styles.truckconnect}>Truck</Text>
      <Text style={styles.truckconnect2}>Connect</Text>
      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#2c23ad',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#2c23ad',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
    opacity: 0.75,
  },
  redefBtn: {
    width: '80%',
    backgroundColor: '#2c23ad',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  redefText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 770,
    left: 10,
  },
  truckconnect: {
    color: '#2c23ad',
    fontWeight: 'bold',
    fontSize: 30

  },
  truckconnect2: {
    color: '#2c23ad',
    fontWeight: '200',
    fontSize: 30,


  },
  containertruck: {
    flexDirection: 'row',
    bottom: 546,
    alignItems: 'center',
  }
  
});