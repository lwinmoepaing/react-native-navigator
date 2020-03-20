import React from 'react'
import { View, Text, Button } from 'react-native'

const MealDetailScreen = (props) => {
	return (
		<View>
			<Text> Meal Detail Screen </Text>
			<Button onPress={() => {
				props.navigation.navigate('Category')
			}} title="Go To First Category Screen" />
		</View>
	)
}

export default MealDetailScreen
