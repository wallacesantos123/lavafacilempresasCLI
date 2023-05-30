import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';

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
                    <Text style={Style.local}>Pátio</Text>
                    <Text style={Style.quant_p}>0</Text>
                    <View style={Style.icon_1}><Image source={require('../../../assets/icon_car.png')} /></View>
                    <Text style={Style.divisao_1}>|</Text>
                    <Text style={Style.divisao_1_1}>|</Text>
                    <Text style={Style.lavados}>Lavados</Text>
                    <Text style={Style.quant_l}>0</Text>
                    <View style={Style.icon_2}><Image source={require('../../../assets/icon_car.png')} /></View>
                    <Text style={Style.divisao_2}>|</Text>
                    <Text style={Style.divisao_2_1}>|</Text>
                    <Text style={Style.fila}>Fila</Text>
                    <Text style={Style.quant_f}>0</Text>
                    <View style={Style.icon_3}><Image source={require('../../../assets/icon_car.png')} /></View>
                    
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
        color : '#FFF',
    },

    financeiro : {
        width : '40%',
        height : '80%',
        backgroundColor : '#FFF',
        alignSelf : 'baseline',
        marginLeft : '1%',
    },

    font : {
        marginLeft : '5%',
        fontWeight : 'bold',
        fontSize : 16,
        color : '#000'
    },

    data : {
        alignSelf : 'center',
        marginLeft : '5%',
        marginBottom : '5%',
        fontWeight : 'bold',
        color : '#000'
    },

    total : {
        marginTop : '4%',
        marginLeft : '5%',
        fontWeight : 'bold',
        color : '#000'
    },

    carros : {
        width : '57%',
        height : '80%',
        backgroundColor : '#E6E6E6',
        alignSelf : 'baseline',
        marginTop : '-29.2%',
        marginLeft : '42%',
    },

    local : {
        marginLeft : '7.5%',
        fontWeight : 'bold',
        fontSize  : 16,
        color : '#000'
    },
    
    quant_p : {
        position : 'absolute',
        marginLeft : '9%',
        marginTop : '5%',
        fontSize : 60,
        color : '#000'
    },

    icon_1 : {
        position : 'absolute',
        marginLeft : '9%',
        marginTop : '37%',
    },

    divisao_1 : {
        position : 'absolute',
        marginLeft : '30%',
        fontSize : 60,
        marginTop : '-5%',
        color : '#000'
    },

    divisao_1_1 : {
        position : 'absolute',
        marginLeft : '30%',
        fontSize : 60,
        marginTop : '16.5%',
        color : '#000'
    },

    lavados : {
        position : 'absolute',
        marginLeft : '40%',
        font : 16,
        fontWeight : 'bold',
        color : '#000'
    },
    
    quant_l : {
        position : 'absolute',
        marginLeft : '44%',
        marginTop : '5%',
        fontSize : 60,
        color : '#000'
    },

    icon_2 : {
        position : 'absolute',
        marginLeft : '44%',
        marginTop : '37%'
    },

    divisao_2 : {
        position : 'absolute',
        marginLeft : '65%',
        fontSize : 60,
        marginTop : '-5%',
        color : '#000'
    },

    divisao_2_1 : {
        position : 'absolute',
        marginLeft : '65%',
        fontSize : 60,
        marginTop : '16.5%',
        color : '#000'
    },

    fila : {
        position : 'absolute',
        marginLeft : '80%',
        font : 16,
        fontWeight : 'bold',
        color : '#000'
    },

    quant_f : {
        position : 'absolute',
        marginLeft : '78%',
        marginTop : '5%',
        fontSize : 60,
        color : '#000'
    },

    icon_3 : {
        position : 'absolute',
        marginTop : '37%',
        marginLeft : '78.5%',
    }
})

export default Menu;