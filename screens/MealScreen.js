import React from 'react'
import { View, Text, Button } from 'react-native'

const MealScreen = (props) => {
	return (
		<View>
			<Text> Meal Screen </Text>
			<Text> </Text>
			<Button onPress={() => {
				props.navigation.navigate('MealDetail')
			}} title="Go To Meal Detail" />
			<Text> </Text>
			<Button onPress={() => {
				props.navigation.push('Meal')
			}} title="Nested Meal Screen" />
			<Text> </Text>
			<Button onPress={() => {
				props.navigation.goBack()
			}} title="Go Back" />
		</View>
	)
}

export default MealScreen
