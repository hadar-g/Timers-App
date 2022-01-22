import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const[timers, setTimers] = useState([])
const[activityTitle, setActivityTitle] =useState('')

const onRecieveNewActivity = (props.valueArray)
const addTimerHandler = () =>{
    setTimers(timers => [...timers, newTimer])
}

const TimersList = props => {
    return(
        <View>
            <Text>
                    TEXT
            </Text>
        </View>
    )

}
export default TimersList
