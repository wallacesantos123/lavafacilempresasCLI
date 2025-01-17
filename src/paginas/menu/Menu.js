import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, Alert } from 'react-native';

const Menu = function ({navigation}) {
    const [nome, setNome] = React.useState('');
    const [modelo, setModelo] = React.useState('');
    const [count, setCount] = React.useState(0);
    const [ status, setStatus ] = React.useState(' ');

    const Lavagens = () => {
        fetch('http://lavafacil.ddns.net/lavafacilservidor/request_lavagens.php' ,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => setStatus(json));

        console.log(status);
    }

    const Deslogar = () => {
        fetch('http://lavafacil.ddns.net/lavafacilservidor/deslogar_json.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
    
            Alert.alert("Aguarde, Saindo.");
    
            setTimeout(() => {
                navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Inicio',
                      },
                    ],
                });
            }, 5000);       
    }

    return (
        <KeyboardAvoidingView style={Style.container}>
            <View style={Style.painel}>
                <TouchableOpacity
                    onPress={() => Deslogar()}
                >
                    <Text style={Style.titulo}>Lava-Facil Empresas</Text>
                </TouchableOpacity>
                
                <View style={Style.financeiro}> 
                    <Text style={Style.data}>DD/MM/AA</Text>
                    <Text style={Style.text}>Dinheiro: R$0,00</Text>
                    <Text style={Style.text}>Cartão/Pix: R$0,00</Text>
                    <Text style={Style.text}>A Receber: R$0,00</Text>
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

                <View style={Style.lavagens}>
                    <Text style={Style.nome}>Nome Completo</Text>
                    <Text style={Style.modelo}>Carro</Text>

                    <TouchableOpacity 
                        style={Style.bt_sim}
                        onPress = {() => Lavagens()}
                    >
                        <Text Style={Style.txt_sim}>Sim</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Style.bt_nao}>
                        <Text Style={Style.txt_nao}>Não</Text>
                    </TouchableOpacity>
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

    text : {
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
        marginTop : '-33.4%',
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
        marginLeft : '38%',
        fontSize : 16,
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
        fontSize : 16,
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
    },

    lavagens : {
        width : 'auto',
        height : '25%',
        minWidth : '98%',
        marginTop : '2%',
        borderWidth : 2,
        borderColor : 'green',
        backgroundColor : '#FFF',
    },

    nome : {
        marginTop : '2.5%',
        marginLeft : '2%',
        fontWeight : 'bold'
    },
    
    modelo : {
        alignSelf : 'center',
        marginTop : '-5%',
        fontWeight : 'bold'
    },

    bt_sim : {
        marginLeft : '70%',
        marginTop : '-5%',
    },

    bt_nao : {
        marginLeft : '89%',
        marginTop : '-5%',
    },

    txt_sim : {
        fontWeight : 'bold'
    },

    txt_nao : {
        fontWeight : 'bold'
    }
})

export default Menu;