import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import GeneralOffice from "../../assets/images/go.jpeg";
import WeiJieComputer from "../../assets/images/WeiJie_Computer.png";
import LinearGradient from "react-native-linear-gradient";
import chat from "../../assets/images/chat.png";
import select_prompt from "../../assets/images/select_prompt.png";
import cancel from "../../assets/images/cancel.png";

class WeiJieIntroduction extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  };

  constructor(props) {
    super(props);
  };
  openURL(url) {
		if (url != "") {
      Linking.openURL(url);
      return true;
		} return false;
  }

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
              marginLeft: 24,
              marginRight: 12,
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
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black"
        }}
      >
        <ImageBackground
          source={GeneralOffice}
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
                  {this.prompts("DiscoverCamp", "Tell me more about the Discover Camp", 1, "")}
                  {this.prompts("ECG", "What about the ECG in SST", 2, "")}
                  {this.prompts("AlumniSuccess", "Where do SST students go on to after they graduate?", 3, "")}

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
            <Text
              style={{
                fontFamily: "Avenir Next",
                textAlign: "center",
                fontSize: 30,
                fontWeight: "600",
                color: "white"
              }}
            >
              Orientation
            </Text>
            <View
              style={{
                width: "100%",
                backgroundColor: "white",
                shadowColor: "gray",
                shadowBlur: 10,
                shadowOffset: {
                  width: 2,
                  height: 2
                },
                shadowOpacity: 1,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 16
              }}
            >
              <Text
                style={{
                  padding: 8,
                  fontSize: 18,
                  fontFamily: "Avenir Next"
                }}
              >
                Hi, I'm Wei Jie from Secondary 4. I can't believe that I am 
                graduating this year. Time flies! Although I'll be graduating 
                this year, I'm relieved that SST has put in place a series of 
                Education and Career Guidance (ECG) from Secondary 1 all the 
                way to Secondary 4! 

                There were assembly talks to find out more about JC or Polytechnics, 
                Industrial Attachments, Career Fairs and our Secondary 4 Discover 
                Camp that is a unique out-of-classroom experience that will help 
                our students uncover their strengths and interests. It seeks to help 
                us plan for our future ahead. 
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  alignSelf: "center",
                  marginLeft: "10%",
                  marginTop: "20%",
                  width: "35%",
                  height: "85%",
                  resizeMode: "contain"
                }}
                source={WeiJieComputer}
              />
            </View>
            <View style={{
              backgroundColor: "white",
              position: "absolute",
              left: 0,
              bottom: 20,
              padding: 8,
              paddingVertical: 4,
              marginRight: 68,
              borderRadius: 5
            }}>
              <Text style={{ fontFamily: "Avenir Next" }}>So many new people and experiences to talk about. Where would you like me to start?</Text>
            </View>
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
                borderRadius: 30
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
                this.props.navigation.goBack();
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

export default WeiJieIntroduction;