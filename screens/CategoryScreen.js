import React from 'react'
import { View, Text, Button } from 'react-native'

const CategoryScreen = (props) => {
	return (
		<View>
			<Text> Category Screen </Text>
			<Button onPress={() => {
				props.navigation.navigate('Meal')
			}} title="Go To Meal Screen" />
		</View>
	)
}

export default CategoryScreen
