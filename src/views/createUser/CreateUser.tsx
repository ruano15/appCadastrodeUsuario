import React, { useState } from "react";
import { View } from "react-native";
import { CreateUsers } from "../../components/createUsers/CreateUsers";
import { styles } from "./style";
import api from "../../api/db";

interface Props{
    navigation: any
}

export default function CreateUser( props:Props ){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const cadstra = () => {
        const req = api.post(`/user/create`, {name:name, email:email, password:password})
            .then(props.navigation.navigate("Home"))
            .catch()
    }


    return(
        <View style={styles.container}>
            <CreateUsers name={name} nameChange={setName}
            email={email} emailChange={setEmail}
            password={password} passChange={setPassword}
            onPress={cadstra} disablenName={true} abaNome="Create New User"
            disablenEmail={true} disablenSenha={true}/>
        </View>
    )
}