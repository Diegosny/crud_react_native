import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 
import Login from './Produtos'
import Cadastro from './Cadastro'


const { Navigator, Screen } = createBottomTabNavigator();

function AppTab() {
    return (
        <NavigationContainer>
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                labelStyle: {
                    fontSize: 10,
                    marginLeft: 10,
                    textTransform: 'uppercase'
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen name="Produtos" component={Login} />
            <Screen name="Cadastrar Produto" component={Cadastro} />
        </Navigator>
    </NavigationContainer>
    )
}


export default AppTab