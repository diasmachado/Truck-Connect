import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function StackTwoScreen() {
  const navigator = useNavigation();
  const [cadastroemail, cemail] = useState('');
  const [cadastrosenha, csenha] = useState('');
  const [confirmasenha, confirmsenha] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [cnpj1, cnpj] = useState ('');

  const cadastrofunc = () => {
    if (!termsAccepted) {
      Alert.alert('Você precisa aceitar os termos para prosseguir.');
      console.log("O usuario aceitou os termos ");
      return;
    }
    console.log('Email:', cadastroemail);
    console.log('Senha:', cadastrosenha);
    console.log('Confirmação de senha:', confirmasenha);
    if(cadastroemail == "" || cadastrosenha == ""){
      Alert.alert(
        'ERRO!',
        'Email ou senha inválido.',
        [
          {text: 'OK', onPress: () => console.log('email ou senha do usuario invalido!')},
        ],
        {cancelable: false}
      );
    }
    if(cnpj1.length < 14 || cnpj1.length > 14){
      Alert.alert(
        'ERRO!',
        'Cnpj invalido.',
        [
          {text: 'OK', onPress: () => console.log('cnpj invalido')},
        ],
        {cancelable: false}
      );
    }
    
  };

  const voltar = () => {
    console.log('Usuário está voltando.');
    navigator.navigate('login');
  };

  const handleAcceptTerms = () => {
    setTermsAccepted(true);
    console.log('o usuario aceitou os termos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleregistro}>Cadastre-se!</Text>
      <View style={styles.inputview}>
        <TextInput
          style={styles.inputTextcmail}
          placeholder="Digite seu email..."
          placeholderTextColor="#fafafc"
          onChangeText={(text) => cemail(text)}
        />
      </View>
      <View style={styles.inputview}>
        <TextInput
          style={styles.inputTextcmail}
          placeholder="Insira o seu cnpj (Apenas números)"
          placeholderTextColor="#fafafc"
          onChangeText={(text) => cnpj(text)}
        />
      </View>
      <View style={styles.inputview}>
        <TextInput
          secureTextEntry
          style={styles.inputTextcmail}
          placeholder="Digite sua senha..."
          placeholderTextColor="#fafafc"
          onChangeText={(text) => csenha(text)}
        />
      </View>
      <View style={styles.inputview}>
        <TextInput
          secureTextEntry
          style={styles.inputTextcmail}
          placeholder="Confirme sua senha..."
          placeholderTextColor="#fafafc"
          onChangeText={(text) => confirmsenha(text)}
        />
      </View>
      
      <TouchableOpacity style={styles.redefBtn} onPress={cadastrofunc}>
        <Text style={styles.redefText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowButton} onPress={voltar}>
        <Icon name="arrow-left" size={30} color="#2c23ad" />
      </TouchableOpacity>
      <View style={styles.containertruck}>
        <Text style={styles.truckconnect}>Truck</Text>
        <Text style={styles.truckconnect2}>Connect</Text>
      </View>
      <View>
        <Text style={styles.termoscontainer}>
          <Text style={styles.termosconcordar}>Estou ciente das políticas e concordo em segui-las</Text>
        </Text>
      </View>
      {!termsAccepted && (
        <TouchableOpacity style={styles.acceptTermsButton} onPress={handleAcceptTerms}>
          <Text style={styles.acceptTermsButtonText}>Aceitar Termos</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleregistro: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#2c23ad',
    marginBottom: 30,
  },
  inputTextcmail: {
    height: 50,
    color: 'white',
    opacity: 0.75,
  },
  inputview: {
    width: '80%',
    backgroundColor: '#2c23ad',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  redefBtn: {
    width: '80%',
    backgroundColor: '#2c23ad',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  redefText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  arrowButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  truckconnect: {
    color: '#2c23ad',
    fontWeight: 'bold',
    fontSize: 30,
  },
  truckconnect2: {
    color: '#2c23ad',
    fontWeight: '200',
    fontSize: 30,
  },
  containertruck: {
    flexDirection: 'row',
    marginBottom: 0,
    position: 'absolute',
    top: 50,
    left: 116,
  },
  termoscontainer: {
    marginBottom: 20,
    top: 10,
    left: -10,
  },
  termosconcordar: {
    color: '#2c23ad',
    fontWeight: 'bold',
    fontSize: 12,
  },
  acceptTermsButton: {
    backgroundColor: '#2c23ad',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  acceptTermsButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
