import React from 'react'
import { View, Text, Button } from 'react-native'
import { random } from '../util/helper'

const CategoryScreen = (props) => {
	return (
		<View>
			<Text> Category Screen </Text>
			<Text> </Text>
			<Button onPress={() => {
				const params = {
					id: `${random()}--zz`
				}
				props.navigation.navigate('Meal', params)
			}} title="Go To Meal Screen" />

		</View>
	)
}

export default CategoryScreen
