import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Import de Paginas
import Inicio from './inicio/inicio';
import Login from './Login/Login';
import Menu from "./menu/Menu";
import Cadastrar from "./cadastrar/Cadastrar";

const Navegacao = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu">
                <Stack.Screen name='Inicio' component={Inicio} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='Menu' component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navegacao;