import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { conversationsSec4 } from "../Conversations";
import Background from "../../assets/images/background.png";
import WeiJieFace from "../../assets/images/WeiJie_profile.png";

class ChatViewSec4 extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  constructor(props) {
    super(props);
    this.state = {
      conversation: this.props.navigation.state.params.conversation
    };
    this.fadeAnimation = new Animated.Value(0);
  }

  pickingConversation() {
    switch (this.state.conversation) {
      case "Computing":
        return conversationsSec4.Computing;
      case "Astronomy":
        return conversationsSec4.Astronomy;
      case "DiscoverProgram":
        return conversationsSec4.DiscoverProgram;
      case "CareerFairGuidanceTalks":
        return conversationsSec4.CareerFairGuidanceTalks;
      case "AlumniSuccess":
        return conversationsSec4.AlumniSuccess;
      default:
        return 0;
    }
  }

  render() {
    const { navigation } = this.props;
    const conversationBubbles = [];

    for (let i = 0; i < this.pickingConversation().length; i += 1) {
      conversationBubbles.push(
        <Animated.View style={{opacity: this.fadeAnimation}}>
          <View style={styles.ChatViewStyle}>
            <Text style={styles.ChatTextStyle}>
              {this.pickingConversation()[i]}
            </Text>
          </View>
        </Animated.View>
      );
    }
    if (
      this.state.conversation === "SettlingIn" ||
      this.state.conversation === "StudentExperiences"
    ) {
      conversationBubbles.push(
        <View
          style={{
            margin: 16,
            alignItems: "flex-end",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CCAMenu");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
                borderRadius: 16
              }}
            >
              <Text
                style={{
                  fontFamily: "Avenir Next",
                  fontSize: 15,
                  fontWeight: "500"
                }}
              >
                Let us look at CCAs!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
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
            <ScrollView>{conversationBubbles}</ScrollView>
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
  }
});

export default ChatViewSec4;
