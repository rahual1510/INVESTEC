import React, { Component } from 'react';
import { TextInput } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const CustomTexInput = (props) => {
    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: wp("90%"), alignSelf: "center", borderRadius: hp("1%") }}
            onChangeText={text => props.onChangeText(text)}
            placeholder={props.placeholder}
            value={props.value}
        />
    );
}

export default CustomTexInput;