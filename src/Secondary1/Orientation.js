import React, { Component } from "react";
import {
	Animated,
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	Image,
	ImageBackground,
	TouchableOpacity,
	ScrollView,
	Modal
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { conversations } from "../Conversations";
import LinearGradient from "react-native-linear-gradient";
import Background from "../../assets/images/background.png";
import RachelFace from "../../assets/images/Rachel_Face.png";
import chat from "../../assets/images/chat.png"
import cancel from "../../assets/images/cancel.png";

class Orientation extends Component {
    static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.fadeAnimation = new Animated.Value(0);
	}
	state = {
    modalVisible: false
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

	componentDidMount() {
		Animated.timing(this.fadeAnimation, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start()
	}

	render() {
		const { navigation } = this.props;
		const conversationBubbles = [];

		for (let i = 0; i < conversations.KnowingSST.length; i += 1) {
			if (i == 0) {
				conversationBubbles.push(
					<Animated.View style={{ opacity: this.fadeAnimation }}>
						<View style={styles.AskingView}>
							<Text style={styles.AskingText}>{conversations.Orientation[0]}</Text>
						</View>
					</Animated.View>
				);
			} else {
				conversationBubbles.push(
					<Animated.View style={{ opacity: this.fadeAnimation }}>
						<View style={[styles.ChatViewStyle]}>
							<Text style={styles.ChatTextStyle}>{conversations.Orientation[i]}</Text>
						</View>
					</Animated.View>
				);
			}
		}
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: "black"
				}}
			>
				<ImageBackground
					source={Background}
					style={{
						flex: 1,
						resizeMode: "contain"
					}}
					imageStyle={{ opacity: 0.5 }}
				>
					<SafeAreaView
						style={{
							flex: 1,
							margin: 16
						}}
					>
						<Modal
							animationType="fade"
							transparent={true}
							visible={this.state.modalVisible}
						>
							<View style={{
								flex: 1,
								backgroundColor: "rgba(0, 0, 0, 0.7)",
								margin: 0,
								alignItems: "center",
								justifyContent: "center"
							}}>
								<View style={{
									position: "absolute",
									top: 16,
									bottom: 16,
									left: 16,
									right: 16,
								}}>
									<TouchableOpacity
										style={[styles.buttonStyle, { top: "60%" }]}
										onPress={() => {
											const { navigation } = this.props;
											navigation.navigate("Cyberwellness");
											this.setModalVisible(false);

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
													marginLeft: 16,
													flex: 1,
													fontSize: 16,
												}}>Tell me more about CyberWellness in SST</Text>

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
                                    <TouchableOpacity
										style={[styles.buttonStyle, { top: "70%" }]}
										onPress={() => {
											const { navigation } = this.props;
											navigation.navigate("SettlingIn");
											this.setModalVisible(false);

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
													marginLeft: 16,
													flex: 1,
													fontSize: 16,
												}}>How else did you settle in?</Text>

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

									{/* //TODO:1.1.1 */}
									{/* <QuestionButton converseText="How did you get to know SST?" tOffset="70%"  navigation={this.props.navigation} conversation="KnowingSST" onPress={}/>
                  <QuestionButton converseText=" I hear that students come from different primary schools here - how do you make friends?" tOffset="80%" navigation={this.props.navigation} conversation="MakingFriends" action={()=>{this.onNavigate}}/>
                  <QuestionButton converseText="Ask my own question" tOffset="80%"/> */}
								</View>
								<TouchableOpacity
									style={{
										position: "absolute",
										backgroundColor: "#84C7C3",
										position: "absolute",
										height: 60,
										width: 60,
										bottom: 24,
										right: 0,

										alignItems: "center",
										justifyContent: "center",
										borderRadius: 30,
										margin: 16
									}}
									onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
								>
									<LinearGradient
										start={{ x: 0, y: 1 }}
										end={{ x: 1, y: 0 }}
										colors={["#84C7C3", "#0084C2"]}
										style={{
											alignItems: "center",
											justifyContent: "center",
											borderRadius: 30,
											width: "100%",
											height: "100%",
										}}
									>

										<Image
											source={cancel}
										/>
									</LinearGradient>
								</TouchableOpacity>
							</View>

						</Modal>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
								paddingBottom: 8
							}}
						>
							<Image
								style={{
									width: 50,
									height: 50,
									borderRadius: 25,
									resizeMode: "cover",
									alignItems: "flex-start"
								}}
								source={RachelFace}
							/>
							<Text
								style={{
									fontFamily: "Avenir Next",
									textAlign: "center",
									fontSize: 30,
									fontWeight: "600",
									color: "white",
									paddingLeft: 16
								}}
							>
								Rachel
								</Text>
						</View>
						<ScrollView>
							{conversationBubbles}
						</ScrollView>
						<TouchableOpacity
							style={{

								backgroundColor: "#84C7C3",
								position: "absolute",
								height: 60,
								width: 60,
								bottom: 24,
								right: 0,
								alignItems: "center",
								justifyContent: "center",
								borderRadius: 30,
							}}
							onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
						>
							<LinearGradient
								start={{ x: 0, y: 1 }}
								end={{ x: 1, y: 0 }}
								colors={["#84C7C3", "#0084C2"]}
								style={{
									alignItems: "center",
									justifyContent: "center",
									borderRadius: 30,
									width: "100%",
									height: "100%",
								}}
							>

								<Image
									source={chat}
								/>
							</LinearGradient>
						</TouchableOpacity>
					</SafeAreaView>
					<SafeAreaView
						style={{
							marginTop: 16,
							marginLeft: 8,
							position: "absolute"
						}}
					>
						<TouchableOpacity
							onPress={() => {
								const { navigation } = this.props
								navigation.goBack();
							}}
						>
							<Icon name="keyboard-arrow-left" color="white" size={40} />
						</TouchableOpacity>
					</SafeAreaView>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	AskingView: {
		width: "75%",
		backgroundColor: "darkgrey",
		shadowColor: "gray",
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
	},

	AskingText: {
		padding: 8,
		fontSize: 18,
		fontFamily: "Avenir Next",
		color: "white"
	},
	ChatTextStyle: {
		padding: 8,
		fontSize: 18,
		fontFamily: "Avenir Next"
	},
	ChatViewStyle: {
		width: "75%",
		backgroundColor: "white",
		shadowColor: "gray",
		shadowOffset: {
			width: 2,
			height: 2
		},
		shadowOpacity: 1,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "flex-start",
		marginTop: 16
	},
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
})


export default Orientation