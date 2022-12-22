import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const Menu = function ({Navigation}) {
    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.opcoes}>
                <TouchableOpacity>
                    <Text>Inicio</Text>
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
    }
})

export default Menu;