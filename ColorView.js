import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Audio } from 'expo-av';
import colors from './colors';

export default class ColorView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color: props.color
        }
        this.playSound = this.playSound.bind(this)
    }
    
    async playSound() {
        const { sound } = await Audio.Sound.createAsync(colors[this.state.color]);
        await sound.playAsync();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.playSound} style={{
                backgroundColor: this.state.color,
                height: '100%',
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View>
                    <Text style={{
                        color: '#000000AA',
                        fontSize: 100,
    
                    }}>{this.state.color}</Text>
                </View>
            </TouchableOpacity>
    
        )
    }
}
