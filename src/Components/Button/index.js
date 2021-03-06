import React from 'react'
import { TouchableOpacity, Text } from 'react-native'


export default function Button(props) {
    return (
        <TouchableOpacity
            style={[{
                //borderRadius: 50,
                width: 200,
                height: 50,
                marginLeft: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000'
            }, props.style]}
            onPress={props.onPress}>
            <Text style={{ color: '#fff', fontSize: 25 }}>{props.texto}</Text>
        </TouchableOpacity>
    )
}
