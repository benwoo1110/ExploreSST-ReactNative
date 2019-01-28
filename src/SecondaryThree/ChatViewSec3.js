import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { conversationsSec3 } from "../Conversations";
import Background from "../../assets/images/background.png";
import RachelFace from "../../assets/images/Rachel_Face.png";

class ChatViewSec3 extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      conversation: this.props.navigation.state.params.conversation
    };
  }

  pickingConversation() {
    switch (this.state.conversation) {
      case "Electronics":
        return conversationsSec3.Electronics;
      case "CyberWellness":
        return conversations.CyberWellenss;
      case "SettlingIn":
        return conversations.SettlingIn;
      case "SCITDP":
        return conversationsSec3.SCITDP;
      case "Robotics":
        return conversationsSec3.Robotics;
      case "IRAP":
        return conversationsSec3.IRAP;
      case "OBS":
        return conversationsSec3.OBS;
      default:
        return;
    }
  }

  render() {
    const { navigation } = this.props;
    const conversationBubbles = [];
    for (let i = 0; i < this.pickingConversation().length; i += 1) {
      conversationBubbles.push(
        <View style={styles.ChatViewStyle}>
          <Text style={styles.ChatTextStyle}>
            {this.pickingConversation()[i]}
          </Text>
        </View>
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
                Priya
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

export default ChatViewSec3;
