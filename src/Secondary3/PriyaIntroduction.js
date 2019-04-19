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
import PriyaSolving from "../../assets/images/Priya_Solving.png";
import LinearGradient from "react-native-linear-gradient";
import { ChatIcon, CloseIcon, SendIcon } from "../Components/IconSet"

// import QuestionButton from "../../src/Components/QuestionButton";

class PriyaIntroduction extends Component {
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
                  {/*this.prompts("", "What are you looking forward to this year?", 1, "")*/}
                  {this.prompts("RachelIntroduction", "Tell me more about your juniors' experiences", 2, "")}
                  {this.prompts("IRAP", "What is IRAP about?", 3, "")}
                  {this.prompts("SCITDP", "Science TDP? Tell me more!", 4, "")}
                  {this.prompts("SSTINC", "What about other TDPs?", 5, "")}
                  {this.prompts("OBS", "Could you tell me more about OBS?", 6, "")}

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

                    <CloseIcon />
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
                Hey! My name is Priya. I am in Secondary 3 this year. To me,
                every year is a learning journey and there are different
                explorations in store every day!  In Sec 3, I took up an Applied
                Subject, which is Electronics. I participated in OBS and had my
                Industrial and Research Attachment (IRAP). What would you like
                to find out?
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
                source={PriyaSolving}
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
  }

});

export default PriyaIntroduction;