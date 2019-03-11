import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Swiper from "react-native-swiper";
import Video from "react-native-video";
import GeneralOffice from "../assets/images/go.jpeg";
import PSBLogo from "../assets/images/psblogo.png";
import vid from "../assets/videos/idk.mp4";

class intro extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      isplaying: true
    }
   
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
          imageStyle={{ opacity: 0.6 }}
        >
          <SafeAreaView
            style={{
              flex: 1,
              margin: 16
            }}
          >
            <View>
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
              </View>
              <Image
                style={{
                  alignSelf: "center",
                  justifyContent: "flex-start",
                  height: "14.5%",
                  width: "50%",
                  resizeMode: "contain",

                }}
                source={PSBLogo}
              />
            
            <View
              style={{
                marginTop: 32,
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
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  padding: 8,
                  fontSize: 18,
                  fontFamily: "Avenir Next"
                }}
              >
                We are the Peer Support Board and we are here to bring you on
                board before the start of your SST Journey! Let’s go!
              </Text>
            </View>
            <View
              style={{
                marginTop: 48,
                width: "100%",
                height: "35%",
                backgroundColor: "white",
                borderRadius: 5,
                shadowColor: "gray",
                shadowBlur: 10,
                shadowOffset: {
                  width: 2,
                  height: 2
                },
                shadowOpacity: 1


              }}
            >
              <Swiper removeClippedSubviews={false}>
                <View>
                  <Text
                    style={{
                      padding: 8,
                      paddingBottom: 0,
                      fontSize: 18,
                      fontFamily: "Avenir Next"
                    }}
                  >
                    The annual SST orientation programme serves as the platform
                    for the induction of new student entrants into the SST
                    family. Orientation seeks to prepare the new entrants for
                    learning in a uniquely SST environment.
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      padding: 8,
                      fontSize: 18,
                      fontFamily: "Avenir Next"
                    }}
                  >
                    The camp component aims to imbue the values of SST and build
                    the foundation of teamwork and discipline amongst students
                    through a series of activities over a period of 2 days and 1
                    night.
                  </Text>
                </View>
                <View style={{ padding: 8, paddingBottom: 40 }}>
                  <Video key={vid}
                    source={vid}
                    ref={ref => {
                      this.player = ref;
                    }}
                    controls={true}
                    paused={this.state.isplaying}
                    onBuffer={this.onBuffer}
                    onError={this.onError}
                    repeat = {false}
                    style={{
                      width: "100%",
                      height: "95%",
                      resizeMode: "contain",
                      alignSelf: "center",
                      borderRadius: 5
                    }}
                  />
                </View>
              </Swiper>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                margin: 16,
                alignItems: "flex-end",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.player.seek(205);
                  // this.player.paused = true
                  this.props.navigation.navigate("Orientation");
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 16,
                    paddingHorizontal: 32,
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
                    Next
                  </Text>
                </View>
              </TouchableOpacity>
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

export default intro;
