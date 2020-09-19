
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export class Button extends Component {
    render() {
        const { title, value, onPress, customStyle, textStyle } = this.props
        return (
            <TouchableOpacity
                style={[style.buttonStyle, customStyle]}
                activeOpacity={0.5}
                onPress={() => onPress(value)}>
                <Text style={[style.textStyle, textStyle]}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button

const style = StyleSheet.create({
    buttonStyle: {
        width: wp("90%"),
        height: hp("6%"),
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("1%"),
        marginBottom: hp("2%")
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: wp("4%"),
        color: "#1890ff"
    }
})