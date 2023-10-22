import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./style";

interface Props{
    nome: any,
    email: any,
    onPress: any,
}

export function ViewUser(props:Props){

    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text adjustsFontSizeToFit style={styles.text}>Nome:  {props.nome}</Text>
            <Text adjustsFontSizeToFit style={styles.text}>Email: {props.email}</Text>
        </TouchableOpacity>
    )
}