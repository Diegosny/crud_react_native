import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CSS } from '../css/Css';
 
export default function Login() {
  return (
    <View style={CSS.container}>
      <Text style={CSS.text}>Produtos</Text>
      <StatusBar style="light" />
    </View>
  );
}
 

export { Login }