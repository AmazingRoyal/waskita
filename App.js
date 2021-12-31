import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import KalenderScreen from './screens/KalenderScreen';
import PelaporanScreen from './screens/PelaporanScreen';
import ProfilScreen from './screens/ProfilScreen';
import PermohonanScreen from './screens/PermohonanScreen';

const KalenderStack = createNativeStackNavigator();
const PelaporanStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function KalenderStackScreen() {
    return (
        <KalenderStack.Navigator>
            <KalenderStack.Screen 
                name="Kalender" 
                component={KalenderScreen} 
                options={{
                    headerStyle: {
                        backgroundColor: '#1F487E',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    
                }}
            />
            <KalenderStack.Screen 
                name="Permohonan" 
                component={PermohonanScreen} 
                options={{
                    headerStyle: {
                        backgroundColor: '#1F487E',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    
                }}
            />
        </KalenderStack.Navigator>
    )
}

function PelaporanStackScreen() {
    return (
        <PelaporanStack.Navigator>
            <PelaporanStack.Screen 
                name="Pelaporan" 
                component={PelaporanScreen} 
                options={{
                    headerStyle: {
                        backgroundColor: '#1F487E',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        color: 'white',
                    },
                    
                }}
            />
        </PelaporanStack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{activeTintColor: '#1F487E'}}
                labelStyle={{ fontSize: 12 }}
                barStyle={{ backgroundColor: '#829CBC', borderRadius:50 }}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarLabel: "Dashboard",
                        tabBarIcon: ({color}) => ( 
                            <MaterialIcons name="dashboard" size={24} color={color} />
                        )
                    }}
                />

                <Tab.Screen 
                    name="Pelaporan" 
                    component={PelaporanStackScreen} 
                    options={{
                        tabBarLabel: "Pelaporan",
                        tabBarIcon: ({color}) => ( 
                            <MaterialIcons name="report-problem" size={24} color={color} />
                        )
                    }}
                />

                <Tab.Screen 
                    name="Kalender" 
                    component={KalenderStackScreen} 
                    options={{
                        tabBarLabel: "Kalender",
                        tabBarIcon: ({color}) => ( 
                            <FontAwesome5 name="calendar-check" size={24} color={color} />
                        )
                    }}
                />

                <Tab.Screen 
                    name="Profil" 
                    component={ProfilScreen} 
                    options={{
                        tabBarLabel: "Profil",
                        tabBarIcon: ({color}) => ( 
                            <MaterialCommunityIcons name="account" size={24} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
            
        </NavigationContainer>
    );
}

