import React, { Component } from 'react'
import { Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FILE_URL } from './constants'

class makingFriends extends Component {
	static navigationOptions = {
		header: null
	}
	render() {
		return (
			<View style={{
				flex: 1,
				backgroundColor: 'black'
			}}>
				<ImageBackground source={{ uri: FILE_URL + '/images/background.png' }}
					style={{
						flex: 1, resizeMode: 'contain'
					}} imageStyle={{ opacity: 0.5 }}>
					<SafeAreaView style={{
						flex: 1,
						margin: 16
					}}>

						<View style={{
							flexDirection: 'row',
							justifyContent: 'center',
							paddingBottom: 8
						}}>

							<Image style={{
								width: 50,
								height: 50,
								borderRadius: 25,
								resizeMode: "cover",
								alignItems: 'flex-start',

							}} source={{ uri: FILE_URL + '/images/Rachel_Face.png' }} />

							<Text style={{
								fontFamily: 'Avenir Next',
								textAlign: 'center',
								alignSelf: 'center',
								fontSize: 30,
								fontWeight: '600',
								color: 'white',
								paddingLeft: 16
							}}>Rachel</Text>
						</View>
						<ScrollView>
							<View style={{
								width: '75%',
								backgroundColor: 'darkgrey',
								shadowColor: 'gray',

								shadowOffset: {
									width: 2,
									height: 2
								},
								shadowOpacity: 1,
								borderRadius: 5,
								justifyContent: "center",
								alignItems: "center",
								alignSelf: "flex-end",

								marginTop: 16

							}}><Text style={{
								padding: 8,
								fontSize: 18,
								fontFamily: 'Avenir Next',
								color: "white"

							}}>I hear that students come from different primary schools here - how do you make friends?
                        </Text></View>
							<View style={
								styles.ChatViewStyle
							}><Text style={
								styles.ChatTextStyle
							}>Making friends is easy especially through the Orientation Programme.
                            </Text></View>
							<View style={
								styles.ChatViewStyle
							}><Text style={
								styles.ChatTextStyle
							}>I was so nervous I couldn’t sleep the night before I started school! 😆
                            </Text></View>
							<View style={
								styles.ChatViewStyle
							}><Text style={
								styles.ChatTextStyle
							}>Officially, orientation starts on the first day of the year but SST prepares us from Registration Day.
                            </Text></View>
							<View style={
								styles.ChatViewStyle
							}><Text style={
								styles.ChatTextStyle
							}>We get guidance on what’s to happen in the first week of school, how do we prepare for it, and of course booklists, uniforms and our learning device.
                            </Text></View>
							<View style={
								styles.ChatViewStyle
							}><Text style={
								styles.ChatTextStyle
							}>The orientation itself is organised seniors in SST. For me, the experience was a fun one.
                            </Text></View>
							<View style={
								styles.ChatViewStyle
							}><Text style={
								styles.ChatTextStyle
							}>You get to know the SST community and learn what is expected of all students.
                            </Text></View>
							<View style={
								styles.ChatViewStyle
							}><Text style={
								styles.ChatTextStyle
							}>Because this is a small community, everyone looks out for one another.
                            </Text></View>

						</ScrollView>
					</SafeAreaView>

					<SafeAreaView style={{
						marginLeft: 8,
						position: 'absolute',
					}}>
						<TouchableOpacity onPress={() => {
							this.props.navigation.goBack()
						}}>
							<Icon name={'keyboard-arrow-left'} color={'white'} size={40} />
						</TouchableOpacity>
					</SafeAreaView>
				</ImageBackground>
			</View >
		)
	}
}

export default makingFriends

const styles = StyleSheet.create({
	ChatTextStyle: {
		padding: 8,
		fontSize: 18,
		fontFamily: 'Avenir Next',
	},
	ChatViewStyle: {
		width: '75%',
		backgroundColor: 'white',
		shadowColor: 'gray',

		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 1,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",

		marginTop: 16

	}

})