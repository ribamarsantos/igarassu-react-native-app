import React from 'react'
import {
    createStackNavigator
} from 'react-navigation';

//Screens

import HomeScreen from '../../screens/HomeScreen'
import LoginScreen from '../../screens/LoginScreen'
import MonumentosListScreen from '../../screens/MonumentosListScreen'


export const createRootNavigator = () => {
    return createStackNavigator({
        Home: HomeScreen,
        LoginScreen: LoginScreen,
        MonumentosListScreen: MonumentosListScreen
    }, {
        initialRouteName: 'LoginScreen'
    })
}