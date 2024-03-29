import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import InSights from './pages/InSights';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Analytics' component={Analytics} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='InSights' component={InSights} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

