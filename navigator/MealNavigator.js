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
				<Stack.Screen
					name="Meal"
					component={MealScreen}
					options={{
						title: 'Meal Screen Modified'
					}}
					initialParams={{
						id: 'Lwin'
					}}
				/>
				<Stack.Screen
					name="MealDetail"
					component={MealDetailScreen}
					options={{
						title: 'Meal Detail Modified'
					}}
				/>
				<Stack.Screen
					name="Category"
					component={CategoryScreen}
					options={{
						title: 'Category Screen'
					}}
				/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
