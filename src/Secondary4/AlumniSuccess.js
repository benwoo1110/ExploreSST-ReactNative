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
import { conversationsSec4 } from "../Conversations";
import LinearGradient from "react-native-linear-gradient";
import Background from "../../assets/images/background.png";
import WeiJieFace from "../../assets/images/WeiJie_profile.png";
import {ChatIcon, CloseIcon, SendIcon} from "../Components/IconSet"


class AlumniSuccess extends Component {
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
        const position = 22 + 78 * sequence;
        return (
            <TouchableOpacity
                style={[styles.buttonStyle, { bottom: position }]}
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
                            marginRight: 12,
                            flex: 1,
                            fontSize: 16,
                        }}>{prompt_text}</Text>

<SendIcon />
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
        const content = conversationsSec4.AlumniSuccess;

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
                                onPress={this.openURL.bind(this, content[i][1])}>
                                {content[i][0]}
                            </Text>
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

                                    {/* CHANGE HERE*/}
                                    {this.prompts("ECG", "Tell me about how SST prepares you for post-secondary education! ", 4, "")}
                                    {this.prompts("", "I want to know more about the alumni", 3, "https://www.facebook.com/search/str/%23SSTAlumni/keywords_search?epa=SEARCH_BOX")}
                                    {this.prompts("", "I want to know more about Danish, the alumni from sst", 2, "https://www.youtube.com/watch?v=s849gz9M9RQ&t=8s")}
                                    {this.prompts("", "I want to know more about Danish, the alumni from sst", 1, "https://www.youtube.com/watch?v=7HfHRCFkHtE&t=4s")}

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
                                    onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
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

<CloseIcon/>
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
                                source={WeiJieFace}
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
                                Wei Jie
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
                            onPress={() => { this.setModalVisible(!this.state.modalVisible); }}
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
<ChatIcon />
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
        borderRadius: 30,
        width: "100%",
        height: "100%",
    }
})

export default AlumniSuccess