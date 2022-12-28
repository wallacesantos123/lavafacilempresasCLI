import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const Menu = function ({Navigation}) {
    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.opcoes}>
                <TouchableOpacity style={Style.inicio}>
                    <Text style={Style.txtinicio}>Inicio</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Text>Lavagens</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const Style = new StyleSheet.create({
    container : {
        width : '100%',
        height : '100%'
    },

    opcoes : {
        width : '100%',
        height : '10%',
        borderWidth : 1,
        borderRadius : 10
    },

    inicio : {
        borderWidth : 1,
        width : '20%',
        height : '100%',
        alignItems : 'center',
        borderRadius : 10
    },

    txtinicio : {
        paddingTop : '20%',
        fontSize : 20,
        fontWeight : 'bold'
    }
})

export default Menu;