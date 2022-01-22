import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
const Banner = props => {
    return(
        <View style = {styles.bannerContainer}>
            <Text style = {styles.text}>
                Organizational Timers App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerContainer:{
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        paddingTop: '10%',
        color: 'white',
        fontSize: 20
    }
})
export default Banner