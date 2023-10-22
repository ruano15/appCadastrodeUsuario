import { StyleSheet } from "react-native";
import { Width } from "../../api/Dimensions";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#FFF", 
        alignItems: "center",
        width: Width * 0.9,
        borderRadius: 10,
        marginVertical: 10
    },
    text:{
        color: "#000",
        fontSize: 20,
        marginVertical: 5,
    }
})