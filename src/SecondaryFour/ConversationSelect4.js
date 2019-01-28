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
import GeneralOffice from "../../assets/images/go.jpeg";
import WeiJieComputer from "../../assets/images/WeiJie_Computer.png";

class ConversationSelect4 extends Component {
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
                So many new poeple and experiences to talk about, where would
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
                source={WeiJieComputer}
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
                      navigation.navigate("ChatViewSec4", {
                        conversation: "Computing",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        What is the Applied Subject Computing+ about?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec4", {
                        conversation: "Astronomy",
                        character: "Wei Jie"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        I want to know more about the astronomy CCA.
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec4", {
                        conversation: "DiscoverProgram",
                        character: "Rachel"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Do you want me to tell you about the Discovery
                        Programme?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec4", {
                        conversation: "CareerFairGuidanceTalks",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Do you want me to tell you more about the ECG in SST
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec4", {
                        conversation: "AlumniSuccess",
                        character: "Rachel"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                      I'm incredibly proud of my alumni! Let me share with you more about their progression after SST!
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

export default ConversationSelect4;
