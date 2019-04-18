import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Image,
    ScrollView,
    StyleSheet,
    Modal,
		Alert,
		Animated,
		Linking
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import GeneralOffice from "../../assets/images/go.jpeg";
import LinearGradient from "react-native-linear-gradient";
import chat from "../../assets/images/chat.png"
import { conversations, conversationsSec2 } from "../Conversations";
import Background from "../../assets/images/background.png";
import FarhanProfile from "../../assets/images/Farhan_profile.png"
import select_prompt from "../../assets/images/select_prompt.png";
import cancel from "../../assets/images/cancel.png";

class AS_Biotech extends Component {
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

	// THIS IS THE NEW FUNCTION
  openURL(url) {
		if (url != "") {
      Linking.openURL(url);
      return true;
		} return false;
  }
  
  // THIS IS THE NEW FUNCTION
  prompts(name, prompt_text, sequence, url) {
    const position = 22 + 78*sequence;
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

            <Image
              source={select_prompt}
              style={{
                marginRight: 16,
                marginTop: 14,
                justifyContent: "center",
              }}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

	render() {
		const { navigation } = this.props;
		const conversationBubbles = [];
		var TextStyle = styles.ChatViewStyle;

		// CHANGE HERE
		const content = conversationsSec2.AS_Biotech;

		for (let i = 0; i < content.length; i += 1) {
			if (i == 0) {
				conversationBubbles.push(
					<Animated.View style={{ opacity: this.fadeAnimation }}>
						<View style={styles.AskingView}>
							<Text style={styles.AskingText}>{content[0][0]}</Text>
						</View>
					</Animated.View>
				);
			} else {
				if (content[i][1] == "") {
					TextStyle = styles.ChatTextStyle;
				} else {
					TextStyle = styles.ChatTextStyle_url;
				}
				conversationBubbles.push(
					<Animated.View style={{ opacity: this.fadeAnimation }}>
						<View style={[styles.ChatViewStyle]}>
							<Text style={TextStyle}
								onPress={this.openURL.bind(this, content[i][1])}>{content[i][0]}</Text>
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
									
									{this.prompts("AppliedLearning", "How is applied learning in SST different?", 1, "")}
									{this.prompts("AS_Electronics", "Find out more about Electronics!", 2, "")}
									{this.prompts("AS_Computing", "Find out more about Computing +!", 3, "")}
									{this.prompts("AS_DesignStudies", "Find out more about Design Studies!", 4, "")}
									{this.prompts("DiscoverCamp", "What did you do during the Discover Programme!", 5, "")}
									{this.prompts("ISS", "What is this mouse trap car project about?", 6, "")}
									{this.prompts("ChangeMakersProgramme", "Tell me more about ChangeMakers Programme", 7, "")}
									{this.prompts("ACE", "Did you mention you are an #Actvocate?", 8, "")}
						
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
									onPress={() => {
										this.setModalVisible(!this.state.modalVisible);
									}}
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
								source={FarhanProfile}
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
								Farhan
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
							onPress={() => {
								this.setModalVisible(!this.state.modalVisible);
							}}
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
	ChatTextStyle_url: {
		padding: 8,
		fontSize: 18,
		fontFamily: "Avenir Next",
		textDecorationLine: 'underline',
		fontStyle: 'italic'
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
		borderRadius: 20,
		width: "100%",
		height: "100%",
	}
})

export default AS_Biotech