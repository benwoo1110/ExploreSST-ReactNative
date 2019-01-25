import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from '../assets/images/background.png';
import RachelFace from '../assets/images/Rachel_Face.png';

class CCA1 extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
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
                Rachel
              </Text>
            </View>

            <ScrollView>
              <View
                style={{
                  width: "75%",
                  backgroundColor: "darkgrey",
                  shadowColor: "gray",
                  shadowOffset: {
                    width: 2,
                    height: 2
                  },
                  shadowOpacity: 1,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "flex-end",

                  marginTop: 16
                }}
              >
                <Text
                  style={{
                    padding: 8,
                    fontSize: 18,
                    fontFamily: "Avenir Next",
                    color: "white"
                  }}
                >
                  What are the CCAs in SST?
                </Text>
              </View>

              <View style={styles.ChatViewStyle}>
                <Text style={styles.ChatTextStyle}>There are...</Text>
              </View>

              <View style={styles.ChatViewStyle}>
                <Text style={styles.ChatTextStyle}>
                  Sports and Games which includes: Athletics Badminton
                  Basketball Fencing Floorball Taekwondo
                </Text>
              </View>

              <View style={styles.ChatViewStyle}>
                <Text style={styles.ChatTextStyle}>
                  We also have the Performing Arts CCAs such as: English Drama
                  Club Guitar Ensemble Show Choir
                </Text>
              </View>
              <View style={styles.ChatViewStyle}>
                <Text style={styles.ChatTextStyle}>
                  There are Clubs and Societies: Astronomy Media Club
                  Robotics@APEX Singapore Youth Flying Club
                </Text>
              </View>
              <View style={styles.ChatViewStyle}>
                <Text style={styles.ChatTextStyle}>
                  Lastly, we have 1 uniform group which is Air Scouts!
                </Text>
              </View>

              <View
                style={{
                  margin: 16,
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("CCA2");
                  }}
                >
                  <View
                    style={{
                      width: "75%",
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
                      I want to find out about a particular CCA
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
              <Icon name={"keyboard-arrow-left"} color={"white"} size={40} />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonView: {
    padding: 8
  },
  buttonText: {
    fontSize: 18
  },
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
    alignItems: "center",
    marginTop: 16
  }
});

export default CCA1;
