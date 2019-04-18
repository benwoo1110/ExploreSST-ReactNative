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
  Linking
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import GeneralOffice from "../../assets/images/go.jpeg";
import FarhanCoding from "../../assets/images/Farhan_Coding.png";
import LinearGradient from "react-native-linear-gradient";
import {ChatIcon, CloseIcon, SendIcon} from "../Components/IconSet"
// import QuestionButton from "../../src/Components/QuestionButton";

var height = 22;

class FarhanIntroduction extends Component {
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

  // THIS IS THE NEW FUNCTION
  openURL(url) {
		if (url != "") {
      Linking.openURL(url);
      return true;
		} return false;
  };

  reset() {
    height = 22;
  }
  
  prompts(name, prompt_text, long, url) {
    var PromptStyle = styles.linGrad;
    var top = 14;

    if (long) {
      height += 102;
      PromptStyle = styles.linGrad_big;
      top = 26;
    }
    else {
      height += 78;
    }

    return (
      <TouchableOpacity
        style={[styles.buttonStyle,{bottom: height}]}
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
          style={PromptStyle}
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

<SendIcon />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
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
          imageStyle={{ opacity: 0.6 }}
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
                  {this.prompts("ACE", "Could you tell me more about your advocacy projects!", false, "")}
                  {this.prompts("ChangeMakersInnofest", "How was your ChangeMakers Innofest experience like?", false, "")}
                  {this.prompts("CCA_S2", "Your CCA is Fencing? What other CCAs are there in SST?", false, "")}
                  {this.prompts("ISS", "I've heard that you spend a term developing science projects instead of regular classes.", true, "")}
                  {/* change this ^^ */}
                  {this.prompts("SSTINC", "What is SST Inc about? What is a TDP?", false, "")}
                  {this.prompts("Leadership", "What kinds of leadership positions are there in SST?", false, "")}
                  {this.prompts("AS_Biotech", "Which Applied Subjects will you be taking?", false, "")}
                  {this.prompts("RachelIntroduction", "I would like to know more about your junior's experience.", false, "")}
                  {this.reset()}

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

<CloseIcon/>
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
              Introduction
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
                My name is Farhan and I'm currently in Secondary 2. I can't believe 
                I am already a senior to my juniors in Secondary 1. We helped to 
                plan their Orientation Week to ease them into Secondary School life. 
                I hope that made them feel more comfortable. 
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Image
                style={{
                  alignSelf: "center",
                  marginLeft: "5%",
                  marginTop: "20%",
                  width: "35%",
                  height: "80%",
                  resizeMode: "contain"
                }}
                source={FarhanCoding}
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
  },
  linGrad_big: {
    opacity: 1,
    borderRadius: 20,
    width: "100%",
    height: "140%",
  }
});

export default FarhanIntroduction;
