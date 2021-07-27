import React from 'react';
import {View, StyleSheet,  Text, Button} from 'react-native';

import Cards from '../components/Cards';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    return(
        <View style={styles.StartScreen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Cards style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input style={styles.input}/>
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="reset"  onPress={() => {}} color={Colors.accent} />
                </View>
                <View style={styles.button}>
                    <Button title="confirm"  onPress={() => {}} color={Colors.primary} />
                    </View>

            </View>
           </Cards>
        </View>
    );
};

const styles = StyleSheet.create({
    StartScreen:{
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        

    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button:{
        width: 100,

    },
    input:{
        width: 50,
        textAlign: 'center',
    }

});

export default StartGameScreen;