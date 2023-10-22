import { StyleSheet } from "react-native";
import { Width } from "../../api/Dimensions";

export const styles = StyleSheet.create({
    container:{
        width: Width * 0.9,
        backgroundColor: "#FFF",
        borderRadius: 15,
        alignItems: "center",
    },
    text:{
        marginVertical: 5,
        color: "#000",
        fontSize: 30,
    },
    input:{
        borderWidth: 1,
        borderColor: "#000",
        height: 50,
        borderRadius: 25,
        textAlign: "center",
        marginVertical: 5,
        width: Width * 0.8,
        fontSize: 20,
        color: "#000"
    },
    button:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#145A32",
        width: 100,
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
    },
    btText:{
        color: "#FFF",
        fontSize: 25
    }
})