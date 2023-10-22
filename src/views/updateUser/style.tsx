import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#EAEDED", 
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"
    },
    btDelete:{
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: "#A93226",
        width: 70,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    text:{
        fontSize: 20,
        color: "#FFF"
    }
})