import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const InputField = props => {

    return(
        <View style = {styles.inputContainer}>
            <TextInput 
                placeholder = "Activity"
                style = {styles.inputField}
            />
            <TextInput
                placeholder='Hr' 
                style = {styles.hourContainer}

            />
            <TextInput 
                placeholder='Mn'
                style = {styles.hourContainer}
            
            />
            <Button title = "Add"/>
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