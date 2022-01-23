
import React, {useState} from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputField from './Components/InputField';
import Banner from './Components/Banner';
import TimersList from './Components/TimersList';



export default function App() {

  const[timersList, setTimersList] = useState([])
  const[timersJson, setTimersJson]=useState([])

  const onSubmitNewActivity = (userValues) => {
    //console.log(userValues)
      setTimersJson(timersJson =>  [...timersJson, {
        title: userValues[0],
        hours: userValues[1],
        mins: userValues[2],
        key: userValues[0],
        running: false
      }])
     
    setTimersList(timersList => [...timersList, userValues])

  }

  return (
  <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
  <View>
      <View style = {styles.banner}>
          <Banner />
      </View>

      <View style={styles.container}>
      
        <InputField onClick = {onSubmitNewActivity}/>
       
      </View>
        <TimersList list = {timersList} json = {timersJson} />

     
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    //  backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: '25%'

  },
  banner:{
    height: '25%',
    borderRadius:10,
  }
  
});
