import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InputField from './Components/InputField';
import Banner from './Components/Banner';
import TimersList from './Components/TimersList';

export default function App() {

  const onSubmitNewActivity = (Uservalues) => {
    const values = UserValues
  }

  return (
  <View>
    <View style = {styles.banner}>
        <Banner />
    </View>
    <View style={styles.container}>
      
        <InputField onClick = {onSubmitNewActivity}/>
      
    </View>
        <TimersList valueArray = {userValues}/>
    </View>
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
