import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CSS } from '../css/Css';
 
export default function Cadastro() {
  return (
    <View style={CSS.container}>
      <Text style={CSS.title}>Cadastro De Produtos</Text>
      <View style={CSS.inputContainer}> 
        <TextInput  style={CSS.input}  placeholder="Produto" clearButtonMode="always" /> 
        <TextInput  style={CSS.input} placeholder="Digite a quantidade" keyboardType={'numeric'} clearButtonMode="always" /> 
        <TouchableOpacity style={CSS.button}> 
          <Text style={CSS.buttonText}>Cadastrar</Text> 
        </TouchableOpacity> 
      </View>
      <StatusBar style="light" />
    </View>
  );
}
