import React from 'react'
import { View, Text, Button } from 'react-native'
import { random } from '../util/helper'

const MealScreen = (props) => {
	const id = props.route.params?.id

	return (
		<View>
			<Text> Meal Screen { id }</Text>
			<Text> </Text>
			<Button onPress={() => {
				props.navigation.navigate('MealDetail')
			}} title="Go To Meal Detail" />
			<Text> </Text>
			<Button onPress={() => {
				const params = {
				}
				props.navigation.push('Meal', params)
			}} title="Nested Meal Screen" />
			<Text> </Text>
			<Button onPress={() => {
				props.navigation.goBack()
			}} title="Go Back" />
		</View>
	)
}

export default MealScreen
