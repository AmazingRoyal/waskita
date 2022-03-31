import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import KalenderScreen from './KalenderScreen';
import ProfilScreen from './ProfilScreen';
import PermohonanScreen from './PermohonanScreen';
import StatusScreen from './StatusScreen';

import PelaporanScreen from './Pelaporan/PelaporanScreen';
import LaporanBaruScreen from './Pelaporan/LaporanBaruScreen';
import DetailKerusakanScreen from './Pelaporan/DetailKerusakanScreen';
import LaporanHarianScreen from './Pelaporan/LaporanHarianScreen';
import ListFormScreen from './Pelaporan/ListFormScreen';
import ListFormRescueScreen from './Pelaporan/ListFormRescueScreen';
import ListFormAmbulanceScreen from './Pelaporan/ListFormAmbulanceScreen';
import ListFormTICScreen from './Pelaporan/ListFormTICScreen';
import ListFormMCSScreen from './Pelaporan/ListFormMCSScreen';
import ListFormCSScreen from './Pelaporan/ListFormCSScreen';
import FormKecelakaanScreen from './Pelaporan/Form/FormKecelakaanScreen';
import FormKerusakanScreen from './Pelaporan/Form/FormKerusakanScreen';
import FormSTTRescueScreen from './Pelaporan/Form/FormSTTRescueScreen';
import FormLaporanHarianScreen from './Pelaporan/Form/FormLaporanHarianScreen';
import FormSTTCSScreen from './Pelaporan/Form/FormSTTCSScreen';

const KalenderStack = createNativeStackNavigator();
const PelaporanStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function KalenderStackScreen() {
    return (
        <KalenderStack.Navigator>
            <KalenderStack.Screen 
                name="Shift" 
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

            <KalenderStack.Screen 
                name="Status" 
                component={StatusScreen} 
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
                name="LaporanHarian" 
                component={LaporanHarianScreen} 
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
                name="Laporan" 
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

            <PelaporanStack.Screen 
                name="List Form" 
                component={ListFormScreen} 
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

            <PelaporanStack.Screen 
                name="List Form Rescue" 
                component={ListFormRescueScreen} 
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

            <PelaporanStack.Screen 
                name="List Form Ambulance" 
                component={ListFormAmbulanceScreen} 
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
            <PelaporanStack.Screen 
                name="List Form TIC" 
                component={ListFormTICScreen} 
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
            <PelaporanStack.Screen 
                name="List Form MCS" 
                component={ListFormMCSScreen} 
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
            <PelaporanStack.Screen 
                name="List Form CS" 
                component={ListFormCSScreen} 
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

            <PelaporanStack.Screen 
                name="Laporan Baru" 
                component={LaporanBaruScreen} 
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

            <PelaporanStack.Screen 
                name="Form Kecelakaan" 
                component={FormKecelakaanScreen} 
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

            <PelaporanStack.Screen 
                name="Form Kerusakan" 
                component={FormKerusakanScreen} 
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

            <PelaporanStack.Screen 
                name="Form STT Rescue" 
                component={FormSTTRescueScreen} 
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

            <PelaporanStack.Screen 
                name="Detail Kerusakan" 
                component={DetailKerusakanScreen} 
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

            <PelaporanStack.Screen 
                name="Form Laporan Harian" 
                component={FormLaporanHarianScreen} 
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

            <PelaporanStack.Screen 
                name="Form STT CS" 
                component={FormSTTCSScreen} 
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
        <>
            {/* <NavigationContainer> */}
                <Tab.Navigator
                    labelStyle={{ fontSize: 12 }}
                    barStyle={{ backgroundColor: '#829CBC', borderRadius:50 }}
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: "#1F487E",
                    }}
                >
                    <Tab.Screen 
                        name="Home" 
                        component={HomeScreen} 
                        options={{
                            tabBarLabel: "Dashboard",
                            tabBarIcon: ({color}) => ( 
                                <MaterialCommunityIcons name="check-all" size={24} color={color} />
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
        </>
    );
}

