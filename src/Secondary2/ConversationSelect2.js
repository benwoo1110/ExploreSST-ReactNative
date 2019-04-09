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
import FarhanCoding from "../../assets/images/Farhan_Coding.png";

class ConversationSelect2 extends Component {
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
                source={FarhanCoding}
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
                      navigation.navigate("ChatViewSec2", {
                        conversation: "ACE",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        I’d love to share with you more about my advocacy
                        projects!
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec2", {
                        conversation: "InnoFest",
                        character: "Rachel"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Do you want to know about my ChangeMakers Innofest
                        experience?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec2", {
                        conversation: "CCA",
                        character: "Rachel"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        My CCA is Fencing! Do you want to know more about CCAs
                        in SST?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec2", {
                        conversation: "SSTINC",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Let me share more on this TDP called SST INC with you!
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec2", {
                        conversation: "ISS",
                        character: "Rachel"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Do you know that we spend one term in Secondary 2
                        developing a science project in place of regular
                        classes?
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec2", {
                        conversation: "StudentExperiences"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        Do you know that we spend one term in Secondary 2
                        developing a science project in place of regular
                        classes? What do we do though? Let me share with you!
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec2", {
                        conversation: "Leadership",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        I have no leadership position but I can share with you
                        what I know!
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ChatViewSec2", {
                        conversation: "AS",
                        character: "Farhan"
                      });
                    }}
                  >
                    <View>
                      <Text style={styles.buttonText}>
                        I have not taken any Applied Subject but I have my mind
                        on one!
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

export default ConversationSelect2;
