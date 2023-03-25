import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Good_or_bad from '../screen/Good_or_bad';


const Stack = createNativeStackNavigator();

function NavigateMenu() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Good_or_bad" component={Good_or_bad} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigateMenu