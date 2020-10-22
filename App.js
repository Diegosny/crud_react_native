import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './assets/components/Produtos'
import { Cadastro } from './assets/components/Cadastro'
import { CSS } from './assets/css/Css'
import AppTab from './assets/components/Tabs';

export default function App() {
  return (
     <View style={CSS.container}>
        {/* <Login/> */}
        {/* <Cadastro/> */}
        <AppTab />
        <StatusBar style="light" />
     </View>
  );
}



