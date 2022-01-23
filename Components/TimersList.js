import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import CountDown from 'react-native-countdown-component';

// const[timers, setTimers] = useState([])

// // const addTimerHandler = (newTimer) =>{
// //     setTimers(timers => [...timers, newTimer])
// // }

const TimersList = props => {
    const [isRunning, setIsRunning] = useState(false)
    return(
        
        <View style={styles.container}>
                {props.list.map((item, key) => 
                <View style = {styles.listItem} key = {item[0]}>
                    <Text style = {styles.item}>{item[0]}</Text>
                    <CountDown 
                        until ={((Number.parseInt(item[1],10)*60)+Number.parseInt(item[2],10))*60}
                        onFinish={() => alert('finished')}
                        size={15}
                        digitStyle={{backgroundColor:'#E6E6EE',borderWidth:3,borderColor:'black'}}
                        timeToShow={['H','M','S']}
                        timeLabels={{h:'hr',m:'mn',s:'sc'}}
                        separatorStyle={{color:'green'}}
                        showSeparator
                        running = {isRunning}
                    />
                    <Button title = "start"
                            onPress={()=>{setIsRunning(true)}}/>
                    <Button title = "stop"
                            onPress={()=>{setIsRunning(false)}} />
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
        margin: 10,
        backgroundColor: '#E6E6E3'
    },
    item:{
        fontSize: 20,
    }
})
export default TimersList
