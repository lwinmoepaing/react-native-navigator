import React from 'react'
import { View, Text, Button } from 'react-native'

const MealDetailScreen = (props) => {
	return (
		<View>
			<Text> Meal Detail Screen </Text>
			<Text> </Text>
			<Button onPress={() => {
				props.navigation.popToTop()
			}} title="Move Reverse to Top of Most" />
		</View>
	)
}

export default MealDetailScreen
