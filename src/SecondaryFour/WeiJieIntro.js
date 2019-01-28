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
import GeneralOffice from "../../assets/images/go.jpeg";
import WeiJieComputer from "../../assets/images/WeiJie_Computer.png";

class WeiJieIntro extends Component {
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
                Hi, I'm Wei Jie from Secondary 4. I can't believe that I am
                graduating this year. Time flies! Although I'll be graduating
                this year, I'm relieved that SST has put in place a series of
                Education and Career Guidance (ECG) from Year 1 all the way to
                Year 4! There were assembly talks to find out more about JC or
                Polytechnics, Industrial Attachments, Career Fairs and our
                Secondary 4 Discover Camp that is a unique out-of-classroom
                experience that will help our students uncover their strengths
                and interests. It seeks to help us plan for our future ahead.
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
                  this.props.navigation.navigate("ConversationSelect3");
                }}
              >
                <View
                  style={{
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
                    Let us Explore!
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

export default WeiJieIntro;
