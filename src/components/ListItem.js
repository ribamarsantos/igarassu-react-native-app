// function component which will receive common props to renders a item in a list 
// img
// Title
// subtitle
// onClick

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const ListItem = (props) => {
    return (
        <View style={styles.container}>
            <Text>ListItem</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ListItem;
