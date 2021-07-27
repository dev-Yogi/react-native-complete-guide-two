import React, { useState } from 'react';
import {
View, 
StyleSheet,
Text, 
Button, 
TouchableWithoutFeedback,
Keyboard
}
from 'react-native';

import Cards from '../components/Cards';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue ] = useState ('')

    const numberInputHandler = InputText => {
            setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue= ('');
    };
    const confirmInputHandler = () =>{
        const chosenNumber = parseInt(enteredValue)
        if (chosenNumber === NaN  || chosenNumber <= 0 || chosenNumber > 99){
            return;
        }
           
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setEnteredValue('');
    };

    return(
    <TouchableWithoutFeedback 
        onPress={() => {
            Keyboard.dismiss();
    }}
    >
        <View style={styles.StartScreen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Cards style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number' maxLength={2} onChangeText={numberInputHandler}
            value={enteredValue}        
            />
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="reset"  onPress={(resetInputHandler) => {}} color={Colors.accent} />
                </View>
                <View style={styles.button}>
                    <Button title="confirm"  onPress={(confirmInputHandler) => {}} color={Colors.primary} />
                    </View>

            </View>
           </Cards>
        </View>
    </TouchableWithoutFeedback>
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