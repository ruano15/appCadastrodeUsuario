import React, { useEffect, useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { CreateUsers } from "../../components/createUsers/CreateUsers";
import api from "../../api/db";
import { useRoute } from "@react-navigation/native";
import { styles } from "./style";

interface Props{
    navigation: any,
    route: any,
}

export default function UpdateUser( props:Props ){

    const route = useRoute()
    const id = route.params

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function gerUser(){
        const res = await api.get(`/user/${id}`)
        try{
            setName(res.data.name)
            setEmail(res.data.email)
            setPassword(res.data.password)
        }catch(error){
            console.log(error)
        }
    }

    const update = () => {
        const req = api.put(`/user/update/${id}`, {name:name})
            .then(props.navigation.navigate("Home"))
            .catch()
    }

    function deleteUsers(){
        const req = api.delete(`/user/delete/${id}`)
        try{
            props.navigation.navigate("Home")
        }catch(error){
            console.log(error)
        }
    }

    function deletion(){
        Alert.alert('Confirmação', 'Deseja excluir esse usuario?', [
            {text: 'Cancel', onPress: () => {}},
            {text: 'OK', onPress: () => deleteUsers()},
        ]);
    }

    useEffect(() => {
        gerUser()
    }, [])

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btDelete} onPress={deletion}>
                <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
            <CreateUsers name={name} nameChange={setName}
            email={email} emailChange={setEmail}
            password={password} passChange={setPassword}
            onPress={update} disablenName={true} abaNome="Update User"
            disablenEmail={false} disablenSenha={false}/>
        </View>
    )
}