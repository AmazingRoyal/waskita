import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
// import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{headerShown: false}}
            >
                {/* <Stack.Screen name='Splash' component={SplashScreen} /> */}
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Main' component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

