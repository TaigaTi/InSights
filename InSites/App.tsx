import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import InSights from './pages/InSights';
import Post from './pages/Post';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DetailedAnalytics from './pages/DetailedAnalytics';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Analytics' component={Analytics} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='DetailedAnalytics' component={DetailedAnalytics} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='InSights' component={InSights} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Post' component={Post} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

