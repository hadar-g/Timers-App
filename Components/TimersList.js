import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import CountDown from 'react-native-countdown-component';


const TimersList = props => {
    const [isRunning, setIsRunning] = useState(false)
    return(
        
        <View style={styles.container}>
                {props.json.map((item) =>{
                    
                    //console.log(props.json)
                    return(
                      <View key ={item.key} style = {styles.listItem}  >
                        <Text style = {styles.item}>{item.title}</Text>
                        <CountDown 
                            until ={((Number.parseInt(item.hours,10)*60)+Number.parseInt(item.mins,10))*60}
                            onFinish={() => alert('finished')}
                            size={15}
                            digitStyle={{backgroundColor:'#BBBBBB',borderWidth:2,borderColor:'black'}}
                            timeToShow={['H','M','S']}
                            timeLabels={{h:'hr',m:'mn',s:'sc'}}
                            separatorStyle={{color:'green'}}
                            showSeparator
                            running = {item.running}
                        />
                        <Button title = "start"
                                onPress={()=>{
                                //setIsRunning(true) 
                                item.running = true
                                console.log(item.running)
                            }}/>
                        <Button title = "stop"
                                onPress={()=>{
                                    //setIsRunning(false)
                                    console.log(item.running)
                                    item.running = false
                                    }} />
                    </View>
                    )
                } 
                
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
