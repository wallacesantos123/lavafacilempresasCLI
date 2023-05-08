import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const Menu = function ({Navigation}) {
    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.painel}>
                <Text style={Style.titulo}>Lava-Facil Empresas</Text>
                <View style={Style.financeiro}> 
                    <Text style={Style.data}>DD/MM/AA</Text>
                    <Text style={Style.font}>Dinheiro: R$0,00</Text>
                    <Text style={Style.font}>Cartão/Pix: R$0,00</Text>
                    <Text style={Style.font}>A Receber: R$0,00</Text>
                    <Text style={Style.total}>Total: R$0,00</Text>
                </View>
                <View style={Style.carros}>
                    <Text>Pátio</Text>
                    <Text>0</Text>
                    <Text>icon</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const Style = new StyleSheet.create({
    container : {
        width : '100%',
        height : '100%',
        backgroundColor : '#000'
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

    font : {
        marginLeft : '5%'
    },

    data : {
        alignSelf : 'center',
        marginLeft : '5%',
        marginBottom : '5%',
        fontWeight : 'bold'
    },

    total : {
        marginTop : '10%',
        marginLeft : '5%',
        fontWeight : 'bold'
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