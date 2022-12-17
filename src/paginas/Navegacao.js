import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Import de Paginas
import Inicio from './inicio/inicio';
import Login from './Login/Login';
import Menu from "./menu/Menu";

const Navegacao = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name='Inicio' component={Inicio} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Menu' component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navegacao;