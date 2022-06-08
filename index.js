import React from 'react';
import {Text, View, AppRegistry, Image, TouchableOpacity, Alert} from 'react-native';

const Estilos = {
    principal: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    botao:{
        backgroundColor: '#339966',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20   
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
};

const gerarNovaFrase = () =>{
    var numeroAleatorio = Math.floor(Math.random()*5);
    
    var frases = Array();
    frases[0] = 'Nada está tão ruim que não possa piorar! ;)'
    frases[1] = 'Você é feio mas não precisa de uma pedra no rim, HIDRATE-SE!'
    frases[2] = 'O problema de ser mais rápido que a luz é viver sempre na escuridão :('
    frases[3] = 'Não desista agora, deixe para desistir amanhã.'
    frases[4] = 'Lute como nunca, perca como sempre!'

    var frase = frases[numeroAleatorio]; 

    Alert.alert(frase);
}

const App = () => {

    const {principal, botao, textoBotao} = Estilos;

    return(
        <View style={ principal }>
            <Image source= {require('./imgs/logo.png')}/>
            <TouchableOpacity 
            onPress = { gerarNovaFrase }
            style = { botao }>
                <Text style={ textoBotao }> Nova Frase </Text>   
            </TouchableOpacity>
        </View>
        
    );
};

AppRegistry.registerComponent('app2', () => App);
