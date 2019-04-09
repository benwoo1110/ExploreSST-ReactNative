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
import PriyaSolving from "../../assets/images/Priya_Solving.png";

class PriyaIntroduction extends Component {
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
                Hey! My name is Priya. I am in Secondary 3 this year. To me,
                every year is a learning journey and there are different
                explorations in store every day! In Sec 3, I took up an Applied
                Subject, which is Electronics. I participated in OBS and had my
                Industrial and Research Attachment (IRAP). What would you like
                to find out?
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
                source={PriyaSolving}
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

export default PriyaIntroduction;