import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const InputField = props => {

    const [enteredActivity, setEnteredActivity] = useState('')
    const[hours, setHours] = useState('00')
    const[mins, setMins] = useState('00')


    const buttonPressed = () => {
        const values = [enteredActivity, hours, mins]
        props.onClick(values)
    }

    return(
        <View style = {styles.inputContainer}>
            <TextInput 
                placeholder = "Activity"
                style = {styles.inputField}
                onChangeText = {(enteredText) => setEnteredActivity(enteredText)}
                value = {enteredActivity}
            />
            <TextInput
                placeholder='Hr' 
                style = {styles.hourContainer}
                onChangeText={(enteredText) => setHours(enteredText)}

            />
            <TextInput 
                placeholder='Mn'
                style = {styles.hourContainer}
                onChangeText={(enteredText) => setMins(enteredText)}

            
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