import React, {useState} from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Cards from '../components/Cards';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum= Math.floor(Math.random() * (max -min)) + min;
    if(randNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return randNum;
    }
};

const GameScreen = props => {;

 const [currentGuess, setCurrentGuess ] = useState(generateRandomBetween(1, 100, props.userChoice)
 );

 return(
     <View styles={styles.screen}>
         <Text>Opponent's Guess</Text>
         <NumberContainer>{currentGuess}</NumberContainer>
         <Cards style={style.buttonContainer}>
             <Button title="Lower" onPress={() => {}}/>
             <Button title="Higher" onPress={() => {}} />
         </Cards>
         
     </View>
 )
};

const styles = StyleSheet.create({

    screen:{
        flex:1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }

});

export default GameScreen;
