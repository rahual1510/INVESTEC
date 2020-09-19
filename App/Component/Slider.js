

import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Dimensions, Alert } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const screen_width = Dimensions.get("window").width;
const limit = 0.50 * screen_width

export class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animation: new Animated.ValueXY(0)
        }
    }

    componentWillMount() {
        this._x = 0;
        this._y = 0;

        this.state.animation.addListener(value => {
            this._x = value.x;
            this._y = value.y;
        });

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                this.state.animation.setOffset({ x: this._x, y: this._y });
                this.state.animation.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: (event, gesture) => {
                this.state.animation.setValue({
                    x: gesture.dx > 0 ? gesture.dx > wp("78%") ? wp("78%") : gesture.dx : 0,
                    y: 0
                })
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > limit) {
                    alert("You have slided it")
                }
                Animated.spring(this.state.animation, {
                    toValue: { x: 0, y: 0 }
                }).start()
            }

        });
    }

    render() {

        const animatedStyle = {
            transform: this.state.animation.getTranslateTransform()
        }

        return (
            <View style={style.container}>
                <Animated.View style={[style.slidingBox, animatedStyle]}
                    {...this._panResponder.panHandlers}
                />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ color: "#1890ff", alignSelf: "center" }}>Slide me to continue</Text>
                </View>
            </View>
        )
    }
}

export default Slider;

const style = StyleSheet.create({
    container: {
        height: hp("7%"),
        width: wp("90%"),
        borderColor: "#1890ff",
        borderWidth: 1,
        borderRadius: hp("1%"),
        alignSelf: "center",
        flexDirection: "row"
    },
    slidingBox: {
        backgroundColor: "#1890ff",
        height: hp("6.7%"),
        borderRadius: hp("1%"),
        width: hp("6.7%")
    }
})