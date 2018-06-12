//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Answers } from 'react-native-fabric'

Answers.logCustom('Performed a custom event', { bigData: true });
Answers.logContentView('To-Do Edit', 'To-Do', 'to-do-42', { userId: 93 });

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text>Login</Text>

                <Text>Senha</Text>
                
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',      
    },
    containerText: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'steelblue',
        borderRadius: 20,        
    },    
});

//make this component available to the app
export default LoginScreen;
