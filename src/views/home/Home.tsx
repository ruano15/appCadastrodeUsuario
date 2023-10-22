import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View, FlatList } from "react-native";
import { styles } from "./style";
import { ViewUser } from "../../components/viewUser/ViewUser";
import api from "../../api/db";

interface Props{
    navigation: any
}

export default function Home( props:Props ){

    const [nome, setNome] = useState<any[]>([])
    const [refresh, setRefresh] = useState(false)


    async function getPessoas(){
        const res = await api.get(`/users`)
        try{
            setNome(res.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPessoas()
    }, [])

    function add(){
        props.navigation.navigate("CreateUser")
    }

    return(
        <View style={styles.container}>
            <FlatList
            data={nome}
            renderItem={({item}) => <ViewUser nome={item.name} email={item.email} onPress={() => props.navigation.navigate("UpdateUser", item.id)}/> }
            keyExtractor={item => item.name}
            refreshing={refresh}
            onRefresh={() => {
                setRefresh(true)
                getPessoas()
                setRefresh(false)
            }}
            />
            <TouchableOpacity style={styles.button} onPress={add}>
                <Text style={styles.txtBt}> + </Text>
            </TouchableOpacity>
        </View>
    )
}