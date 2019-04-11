import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import chat from "../../assets/images/chat.png"
class QuestionButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				style={{
					position: "absolute",
					top: this.props.tOffset,
					opacity: 1,
					backgroundColor: "#84C7C3",
					position: "absolute",
					height: 60,
					width: "100%",
					borderRadius: 30,
					width: "100%",
				}}
				onPress={() => {
					this.setModalVisible(!this.state.modalVisible);
				}}
			>
				<LinearGradient
					start={{ x: 0, y: 1 }}
					end={{ x: 1, y: 0 }}
					colors={["#84C7C3", "#0084C2"]}
					style={{
						opacity: 1,
						borderRadius: 30,
						width: "100%",
						height: "100%",
					}}
				>
					<View style={{
						flexDirection: "row"
					}}>
						<Text style={{
							color: "white",
							fontFamily: "Avenir Next",
							marginLeft: 16,
							fontSize: 16,
							marginRight: 8,
							justifyContent: "center"
						}}>{this.props.converseText}</Text>

						<Image
							source={chat}
							style={{
								marginRight: 8,
							}}
						/>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
}

export default QuestionButton