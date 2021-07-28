import React from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';

const Cards = props => {
    return(
        <View style={{...styles.CardScreen, ...props.style}}>
          {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    CardScreen:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.26,
        elevation: 8,
        shadowRadius:  6,
        backgroundColor: 'white',
        padding: 10,
        margin: 5

    },
    summaryContainer:{
        
    }


});

export default Cards;