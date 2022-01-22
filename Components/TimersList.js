import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

// const[timers, setTimers] = useState([])

// // const addTimerHandler = (newTimer) =>{
// //     setTimers(timers => [...timers, newTimer])
// // }

const TimersList = props => {
    console.log(props.list)
    return(
        
        <View style={styles.container}>
                {props.list.map((item, key) => 
                <View style = {styles.listItem}>
                    <Text style = {styles.item}>{item[0]}</Text>
                    <Text style = {styles.item}>{item[1]}:{item[2]}</Text>
                    <Button title = "start"/>
                    <Button title = "stop" />
                </View>
                )}
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection: 'column',
   
    },
    listItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'blue',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
    },
    item:{
        fontSize: 20,
    }
})
export default TimersList
