import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

interface Props{
    name: any,
    nameChange: any,
    email: any,
    emailChange: any,
    password: any,
    passChange: any,
    onPress: any,
    abaNome: string,
    disablenName: boolean,
    disablenEmail: boolean,
    disablenSenha: boolean,
}

export function CreateUsers( props:Props ){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.abaNome}</Text>
            <TextInput editable={props.disablenName} style={styles.input} placeholder="Name" value={props.name} onChangeText={props.nameChange}/>
            <TextInput editable={props.disablenEmail} style={styles.input} placeholder="Email" value={props.email} onChangeText={props.emailChange}/>
            <TextInput editable={props.disablenSenha} style={styles.input} placeholder="Password" value={props.password} onChangeText={props.passChange}/>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.btText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}