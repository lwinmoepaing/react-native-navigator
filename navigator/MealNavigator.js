import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import MealScreen from '../screens/MealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryScreen from '../screens/CategoryScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Meal" component={MealScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
