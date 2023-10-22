import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Home from "../views/home/Home"
import CreateUser from "../views/createUser/CreateUser"
import UpdateUser from "../views/updateUser/UpdateUser"

export default function StackRoutes(){

    const { Navigator, Screen } = createNativeStackNavigator()

    return(
        <NavigationContainer independent={true}>
            <Navigator>
                <Screen name='Home' component={Home} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='CreateUser' component={CreateUser} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='UpdateUser' component={UpdateUser} options={{title: '', headerTransparent: true, headerShown: false}}/>
            </Navigator>
        </NavigationContainer>
    )
}