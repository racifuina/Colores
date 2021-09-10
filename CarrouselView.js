import React, { Component } from 'react'
import { SafeAreaView, Dimensions } from 'react-native'
import ColorView from './ColorView'
import colors from './colors'
import Carousel from 'react-native-snap-carousel';
const screenWidth = Dimensions.get("window").width;

export default class CarrouselView extends Component {
    render() {
        const colorList = Object.keys(colors)

        return (
            <SafeAreaView style={{
                height: '100%',
                width: '100%'
            }}>
                <Carousel
                    data={colorList}
                    renderItem={({ item }) => <ColorView color={item} />}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth}
                />
            </SafeAreaView>
        )
    }
}
