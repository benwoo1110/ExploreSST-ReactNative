/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View, 
    Text,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
} from 'react-native';
import background from "../assets/images/background.png"

export default class App extends Component {
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
            <StatusBar
              backgroundColor="rgba(0, 0, 0, 0)"
              barStyle="light-content"
              translucent={true}
            />
            <ImageBackground
              source={background}
              style={{ flex: 1, resizeMode: "contain" }}
              imageStyle={{ opacity: 0.6 }}
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
          </View>
        );
    }
}
