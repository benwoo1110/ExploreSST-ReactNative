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
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 30,
						width: "100%",
						height: "100%",
					}}
				>

					<Image
						source={chat}
						style = {{
						}}
					/>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
}

export default QuestionButton