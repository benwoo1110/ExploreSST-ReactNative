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
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import GeneralOffice from "../../assets/images/go.jpeg";
import RachelWaving from "../../assets/images/Rachel_Waving.png";
import LinearGradient from "react-native-linear-gradient";
import chat from "../../assets/images/chat.png"
import QuestionButton from "../Components/QuestionButton";

class RachelIntroduction extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    modalVisible: false
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  constructor(props){
    super(props);
  }

  onNavigate(){
    this.setState({modalVisible: false}, () => this.props.navigation.navigate('ChatViewSec1'));
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
              onNavigate={this.onNavigate}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => { }}
              style={{
              }}
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
                  <QuestionButton converseText="How did you get to know SST?" tOffset="60%"  navigation={this.props.navigation} conversation="KnowingSST" action={()=>{this.onNavigate}}/>
                  <QuestionButton converseText=" I hear that students come from different primary schools here - how do you make friends?" tOffset="70%"/>
                  <QuestionButton converseText="Ask my own question" tOffset="80%"/>
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
                      source={chat}
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
                Hello, I’m Rachel! I’m a year one SST student this year and I’m
                excited to share my new secondary school life with you!
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
                source={RachelWaving}
              />
            </View>
            <View style={{
              backgroundColor: "white",
              // position: "absolute",
              left: 0,
              bottom: 0,
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
            {/* <ScrollView
                style={{
                  position: "absolute",
                  height: "50%",
                  width: "60%",
                  shadowColor: "gray",
                  shadowBlur: 10,
                  shadowOffset: {
                    width: 2,
                    height: 2
                  },
                  shadowOpacity: 1,
                  borderRadius: 5,

                  alignSelf: "flex-end",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  top: "50%"-16,
                  bottom: 0,
                  right: 0
                }}

              >
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("FirstChatView", {
                        conversation: "KnowingSST",
                        character: "Rachel"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        How did you get to know SST?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("FirstChatView", {
                        conversation: "MakingFriends",
                        character: "Rachel"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        I hear that students come from different primary schools
                        here. How do you make friends?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("FirstChatView", {
                        conversation: "SettlingIn",
                        character: "Rachel"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        How else did you settle in?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("FirstChatView", {
                        conversation: "StudentExperiences"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Student Experiences in SST
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView> */}
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
  buttonView: {
    padding: 8,
    margin: 8,
    backgroundColor: "white",
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18
  }
});

export default RachelIntroduction;
