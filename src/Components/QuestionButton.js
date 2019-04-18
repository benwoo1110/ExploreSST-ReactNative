import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Linking, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {ChatIcon, CloseIcon, SendIcon} from "../Components/IconSet"
class QuestionButton extends Component {
	constructor(props){
		super(props);
		}

	static openURL(url) {
		if (url != "") {
		Linking.openURL(url);
		return true;
		} return false;
	}

	// THIS IS THE NEW FUNCTION
	static prompts(name, prompt_text, sequence, url) {
		const position = 20 + 80*sequence;
		return (
			<TouchableOpacity
			style={[styles.buttonStyle,{bottom: position}]}
			onPress={() => {
				const { navigation } = this.props;
				if (!this.openURL(url)) {
					navigation.navigate(name);
					this.setModalVisible(false);
				}
			}}
			>
			<LinearGradient
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
				colors={["#84C7C3", "#0084C2"]}
				style={styles.linGrad}
			>
				<View style={{
				flexDirection: "row",
				justifyContent: "center",
				flex: 1,
				}}>
				<Text style={{
					color: "white",
					fontFamily: "Avenir Next",
					alignSelf: "center",
					marginLeft: 20,
					flex: 1,
					fontSize: 16,
				}}>{prompt_text}</Text>

				<SendIcon />
				</View>
			</LinearGradient>
			</TouchableOpacity>
		);
	}

	/*
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
					const { navigation } = this.props;
					navigation.navigate("ChatViewSec1", {
						conversation: this.props.conversation
					});
					this.props.onPress;
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
						flexDirection: "row",
						justifyContent: "center",
						flex: 1,
					}}>
						<Text style={{
							color: "white",
							fontFamily: "Avenir Next",
							marginLeft: 16,
							flex: 1

						}}>{this.props.converseText}</Text>

						<Image
							source={chat}
							style={{
								marginRight: 16,
								justifyContent: "center",
							}}
						/>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
	*/
}

const styles = StyleSheet.create({
	buttonStyle: {
	  position: "absolute",
	  opacity: 1,
	  backgroundColor: "#84C7C3",
	  position: "absolute",
	  height: 60,
	  width: "100%",
	  borderRadius: 30,
	  width: "100%",
	},
	linGrad: {
	  opacity: 1,
	  borderRadius: 30,
	  width: "100%",
	  height: "100%",
	}
  
  });

export default QuestionButton