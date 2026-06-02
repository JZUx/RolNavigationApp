import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs para usuario Admin (pantallas Home y Settings)

function AdminTabs() {
  return (
    <Tab.Navigator initialRouteName="Settings">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Tabs para usuario Common (solo pantalla Home)

function CommonTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

// Navegador principal que decide qué mostrar según el rol seleccionado y si la sesión está activa

export default function AppNavigator() {
  const { sesionActiva, rol } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!sesionActiva ? (

          // Si no hay sesión activa, mostrar Login
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : rol === 'admin' ? (

          // Si el rol es admin, mostrar tabs de admin
          <Stack.Screen name="AdminTabs" component={AdminTabs} />
        ) : (

          // Si el rol es common, mostrar tabs de common
          <Stack.Screen name="CommonTabs" component={CommonTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}