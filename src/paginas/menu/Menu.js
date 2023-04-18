import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const Menu = function ({Navigation}) {
    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.painel}>
                <Text style={Style.titulo}>Lava-Facil Empresas</Text>
                <View style={Style.financeiro}> 
                
                </View>
                <View style={Style.carros}>

                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const Style = new StyleSheet.create({
    container : {
        width : '100%',
        height : '100%'
    },

    painel : {
        alignItems : 'center',
        backgroundColor : '#000',
        height : '25%'
    },

    titulo : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#FFF'
    },

    financeiro : {
        width : '40%',
        height : '80%',
        backgroundColor : '#FFF',
        alignSelf : 'baseline',
        marginLeft : '1%',
    },

    carros : {
        width : '58%',
        height : '80%',
        backgroundColor : '#E6E6E6',
        alignSelf : 'baseline',
        marginTop : '-31.7%',
        marginLeft : '42%'
    }
})

export default Menu;