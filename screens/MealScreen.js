import React from 'react'
import { View, Text, Button } from 'react-native'

const MealScreen = (props) => {
	return (
		<View>
			<Text> Meal Screen </Text>
			<Button onPress={() => {
				props.navigation.navigate('MealDetail')
			}} title="Go To Meal Detail" />
		</View>
	)
}

export default MealScreen
