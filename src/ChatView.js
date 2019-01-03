import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { KnowingSST } from './Conversations'

class ChatView extends Component {
    constructor(props) {
        super(props)

        this.state = {
          conversation: this.props.navigation.state.params.conversation
        };
    }
    render() {
        return (
            <View>
                <Text>{KnowingSST}</Text>
                <Text>{this.state.conversation}</Text>
            </View>
        )
    }
}

export default ChatView
