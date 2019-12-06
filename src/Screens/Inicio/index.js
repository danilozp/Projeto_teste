import React from 'react'
import { View, Button, Text } from 'react-native'
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery'

export default function Inicio({ navigation }) {

    return (
        <View style={style.viewImage}>
            <Text>Olá mundo!</Text>
            <Button
                title='Botao'
                onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

