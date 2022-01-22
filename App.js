import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InputField from './Components/InputField';
import Banner from './Components/Banner';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
  <View>
    <View style = {styles.banner}>
        <Banner />
    </View>
    <View style={styles.container}>
      
        <InputField />
      
    </View>
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
    backgroundColor: 'green'
  }
  
});
