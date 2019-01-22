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
import YouTube from "react-native-youtube";

class ShowChoir extends Component {
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
          source={require("../assets/images/background.png")}
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
                source={require("../assets/images/Rachel_Face.png")}
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
                  I want to see some Show Choir performances!
                </Text>
              </View>
              <View style={styles.ChatViewStyle}>
                <Text style={styles.ChatTextStyle}>
                  Here are some of SST Showchoir’s performances!
                </Text>
              </View>
              <View style={styles.ChatViewStyle}>
                <YouTube
                  videoId="KVZ-P-ZI6W4"
                  onReady={e => this.setState({ isReady: true })}
                  onChangeState={e => this.setState({ status: e.state })}
                  onChangeQuality={e => this.setState({ quality: e.quality })}
                  onError={e => this.setState({ error: e.error })}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 5
                  }}
                />
              </View>
              <View style={styles.ChatViewStyle}>
                <YouTube
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 5
                  }}
                />
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

export default ShowChoir;
