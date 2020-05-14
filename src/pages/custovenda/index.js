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
// import logo from './resource/images/logo.png';

const CustoVenda = () => {
  _onPress = () => {
    console.log('custo venda');
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Test navigation</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustoVenda;
