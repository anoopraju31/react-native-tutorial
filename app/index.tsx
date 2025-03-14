import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import icedCoffeeImg from '@/assets/images/iced-coffee.png'

const app = () => {
	return (
		<View style={styles.container}>
			<ImageBackground source={icedCoffeeImg} style={styles.img} resizeMode='cover'>
				<Text style={styles.text}>Coffee Shop!</Text>
			</ImageBackground>
		</View>
	)
}

export default app

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center'
	},
	text: {
		fontSize: 42,
		textAlign: 'center',
		margin: 10,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	img: {
		width: '100%',
		height: '100%',
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center'
	}
})
