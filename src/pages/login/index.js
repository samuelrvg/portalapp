/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import logo from './../../resource/images/logo.png';
import Api from '../../shared/Api';

const Login = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  _onPress = () => {
    let usuario = {
      usuario: 'samuel.vaz',
      senha: '',
    };
    Api.post('Usuario', usuario)
      .then((e) => console.log('result data', e.data))
      .catch((e) => console.log('erro =>> ', e));
    // navigation.navigate('custovenda');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
          <Image source={logo} style={styles.imagem} resizeMode="contain" />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => setUsuario(text)}
            style={styles.textInput}
            underlineColorAndroid="black"
            placeholder="Usuário"
          />
          <TextInput
            onChangeText={(text) => setSenha(text)}
            style={styles.textInput}
            underlineColorAndroid="black"
            placeholder="Senha"
            secureTextEntry={true}
            maxLength={12}
          />
          <TouchableOpacity style={styles.button} onPress={() => _onPress()}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  containerImagem: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  imagem: {
    justifyContent: 'center',
    width: 300,
    height: 100,
  },
  textInput: {
    fontSize: 21,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 3,
    marginTop: 10,
    padding: 10,
  },
  textButton: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 18,
  },
});

export default Login;
