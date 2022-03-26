import React, {useEffect} from 'react'
import { SafeAreaView, StyleSheet, Image } from 'react-native'

export default function SplashScreen({ navigation }) {

    useEffect( () => {
        setTimeout( () => {
            navigation.navigate('Login')
        }, 3000)
    })
    return(
        <SafeAreaView style={styles.base}>
            <Image style={styles.logo} source={require('../img/logo.png')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    base: {
        flex:1,
        backgroundColor: '#1F487E',
        justifyContent: 'center',
        alignItems: 'center'
    }
})