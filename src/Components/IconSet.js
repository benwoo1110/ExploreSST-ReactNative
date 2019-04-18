import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';
import Icon from "react-native-vector-icons/MaterialIcons";



export class ChatIcon extends Component {
	render() {
		return (
			<Icon name="chat" color="white" size={35} />
		)
	}
}


export class CloseIcon extends Component {
	render() {
		return (
			<Icon name="close" color="white" size={40} />
		)
	}
}


  export class SendIcon extends Component {
	render() {
		return (
			<Icon name="send" color="white" size={35} style={{
				marginRight: 16,
				marginTop: 14,
				justifyContent: "center",
			  }} />
		)
	}
}
