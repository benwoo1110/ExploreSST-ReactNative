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
import select_prompt from "../../assets/images/select_prompt.png"
import cancel from "../../assets/images/cancel.png"


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

  constructor(props) {
    super(props);
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
                  <TouchableOpacity
                    style={[styles.buttonStyle,{top: "80%"}]}
                    onPress={() => {
                      const { navigation } = this.props;
                      navigation.navigate("KnowingSST");
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
                          alignSelf: "center",
                          marginLeft: 18,
                          flex: 1,
                          fontSize: 16,
                        }}>How did you get to know SST?</Text>

                        <Image
                          source={select_prompt}
                          style={{
                            marginRight: 14,
                            marginTop: 12,
                            justifyContent: "center",
                          }}
                        />
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.buttonStyle,{top: "70%"}]}
                    onPress={() => {
                      const { navigation } = this.props;
                      navigation.navigate("Orientation");
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
                          alignSelf: "center",
                          marginLeft: 18,
                          flex: 1,
                          fontSize: 13,
                        }}>I hear that students come from different primary schools here - how do you make friends?</Text>

                        <Image
                          source={select_prompt}
                          style={{
                            marginRight: 14,
                            marginTop: 12,
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
    borderRadius: 30,
    width: "100%",
    height: "100%",
  }

});

export default RachelIntroduction;
