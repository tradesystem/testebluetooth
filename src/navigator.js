import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/******** SCREENS ********/
import Login from './screens/Login'
import Home from './screens/Home'
import Produtos from './screens/Produtos'
import Grupos from './screens/Grupos'
import Watermelon from './screens/Watermelon'
import Imprimir from './screens/Imprimir'

/**** criar stack ******/
const Stack = createNativeStackNavigator()

function Navigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                
                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                />

                <Stack.Screen
                    name="Produtos"
                    component={Produtos}
                />

                <Stack.Screen
                    name="Grupos"
                    component={Grupos}
                />

                <Stack.Screen
                    name="Watermelon"
                    component={Watermelon}
                />

                <Stack.Screen
                    name="Imprimir"
                    component={Imprimir}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator