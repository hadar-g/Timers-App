import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Keyboard } from 'react-native';

const InputField = props => {

    const [enteredActivity, setEnteredActivity] = useState('')
    const[hours, setHours] = useState('')
    const[mins, setMins] = useState('')


    const buttonPressed = () => {
        const values = [enteredActivity, hours, mins]
        props.onClick(values)
        setEnteredActivity('')
        setHours('')
        setMins('')
        Keyboard.dismiss()
    }

    return(
        <View style = {styles.inputContainer}>
            <TextInput 
                placeholder = "Activity"
                autoComplete='off'
                style = {styles.inputField}
                onChangeText = {(enteredText) => setEnteredActivity(enteredText)}
                value = {enteredActivity}
            />
            <TextInput
                placeholder='Hr' 
                keyboardType='number-pad'
                style = {styles.hourContainer}
                onChangeText={(enteredText) => setHours(enteredText)}
                value = {hours}

            />
            <TextInput 
                placeholder='Mn'
                keyboardType='number-pad'
                style = {styles.hourContainer}
                onChangeText={(enteredText) => setMins(enteredText)}
                value= {mins}
            />
            <Button 
                title = "Add"
                onPress={buttonPressed}/>
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        flexDirection: 'row',
        // paddingLeft: 10,
        justifyContent: 'space-between'
       // backgroundColor: 'black',
    },
    inputField:{
        width:  '45%',
        borderColor: 'blue',
        borderRadius: 15,
        borderWidth: 1,
        padding: 10,
       // backgroundColor: 'black'
      },
      hourContainer:{
          width: '15%',
          borderColor: 'blue',
          borderWidth: 1,
          borderRadius: 15,
          padding: 10,
      },
})
export default InputField