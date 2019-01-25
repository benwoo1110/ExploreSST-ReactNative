import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from "react-native";
import Background from "../assets/images/background.png";

class Entry extends Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
      var Ft = AsyncStorage.getItem("IsWelcomed")
      if (Ft == "Has Been Gay") {
        this.props.navigation.navigate('Year');
      }
  }
  render() {
    return (
      < View
        style={{
          flex: 1,
          backgroundColor: "black"
        }
        }
      >
        <StatusBar
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
          translucent={true}
        />
        <ImageBackground
          source={Background}
          style={{ flex: 1, resizeMode: "contain" }}
          imageStyle={{ opacity: 0.5 }}
        >
          <SafeAreaView
            style={{
              flex: 1
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
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
                Welcome to the School of Science and Technology, Singapore
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  const { navigation } = this.props;
                  navigation.navigate("Year");
                  AsyncStorage.setItem('IsWelcomed', "Has Been Gay");
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
                    Let us Explore
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View >
    );
  }
}

export default Entry;
