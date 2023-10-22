import React from "react";
import { SafeAreaView } from "react-native";
import Home from "./src/views/home/Home";
import StackRoutes from "./src/routes/StackRoutes";

export default function App(){

  return(
    <SafeAreaView style={{flex: 1}}>
      <StackRoutes />
    </SafeAreaView>
  )
}