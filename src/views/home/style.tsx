import { StyleSheet } from "react-native";
import { Width } from "../../api/Dimensions";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#EAEDED", 
        flex: 1, 
        alignItems: "center",
    },
    button:{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#145A32",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 15,
        right: 15
    },
    txtBt:{
        color: "#FFF",
        fontSize: 50,
    }
})