import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function StackOneScreen() {
    const navigator = useNavigation()

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Email:', email);

    console.log('Senha:', password);
    if(email == "" || password == ""){
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
  const esqueceusenha = () => {
    console.log('Usuario esqueceu a senha.');
      //navegar para a tela de esqueceu a senha
      navigator.navigate("esqueceusenha");
  };
  const cadastro = () => {
    console.log('Usuario esta cadastrando.');
      //navegar para a tela de cadastro
      navigator.navigate("register");
  };
  



  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Truck</Text>
        <Text style={styles.logoText2}>Connect</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Digite seu email..."
          placeholderTextColor="#fafafc"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Digite sua senha..."
          placeholderTextColor="#fafafc"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.esqueceuSenha} onPress={esqueceusenha}>
        <Text style={styles.esqueceuSenhaText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cadastro} onPress={cadastro}>
        <Text style={styles.cadastrotext}>Não possui uma conta?</Text>
        <Text style={styles.cadastrotext2}>Cadastre-se!</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
    flexDirection: 'row',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#2c23ad',
  },
  logoText2: {
    fontWeight: '200',
    fontSize: 50,
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
  loginBtn: {
    width: '80%',
    backgroundColor: '#2c23ad',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  esqueceuSenha: {
    marginTop: 10,
  },
  esqueceuSenhaText: {
    color: '#2c23ad',
  },
  cadastro: {
    flexDirection: 'row',
    top: -135,
    
  },
  cadastrotext: { 
    color: '#2c23ad',
  },
  cadastrotext2: { 
    color: '#2c23ad',
    textDecorationLine : 'underline',
  },  
});