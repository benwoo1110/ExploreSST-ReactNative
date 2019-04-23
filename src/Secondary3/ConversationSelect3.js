import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import GeneralOffice from "../../assets/images/go.png";
import PriyaSolving from "../../assets/images/Priya_Solving.png"

class ConversationSelect3 extends Component {
  static navigationOptions = {
    header: null
  };

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
          imageStyle={{ opacity: 0.5 }}
        >
          <SafeAreaView
            style={{
              flex: 1,
              margin: 16
            }}
          >
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
                So many new people and experiences to talk about, where would
                you like me to start ?
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1
              }}
            >
              <Image
                style={{
                  width: 150,
                  height: 300,
                  resizeMode: "contain",
                  marginTop: "75%"
                }}
                source={PriyaSolving}
              />

              <ScrollView
                style={{
                  width: "60%",
                  shadowColor: "gray",
                  shadowBlur: 10,
                  shadowOffset: {
                    width: 2,
                    height: 2
                  },
                  shadowOpacity: 1,
                  borderRadius: 5,
                  marginTop: 16,
                  alignSelf: "flex-end",
                  backgroundColor: "rgba(255, 255, 255, 0.5)"
                }}
              >
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec3", {
                        conversation: "SCITDP",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Tell me more about Science TDP
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec3", {
                        conversation: "Robotics"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Tell me more about Robotics
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec3", {
                        conversation: "IRAP",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        What is the Industrial Research Attachment
                        Program(IRAP)?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec3", {
                        conversation: "Electronics",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Tell me more about the Electronics Applied Subject
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec3", {
                        conversation: "OBS",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Tell me more about OBS
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
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

export default ConversationSelect3;