

import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Button from '../Component/Button';
import Slider from '../Component/Slider';

export class Two extends Component {

    buttonPressed(value) {
        alert(`${value} is pressed`);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "black" }}>
                <View style={{
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    paddingRight: wp("5%")
                }}>
                    {
                        this.props.name ?
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: wp("8%"),
                                color: "#FFF"
                            }}>{this.props.name}</Text>
                            :
                            null
                    }
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Button title={"Press me"} value={"one"} onPress={this.buttonPressed} />
                    <Button title={"Press me"} value={"two"} onPress={this.buttonPressed} customStyle={{ backgroundColor: "rgba(105,105,105,.7)" }} />
                    <Button title={"Press me"} value={"third"} onPress={this.buttonPressed} customStyle={{ backgroundColor: "#1890ff" }} textStyle={{ color: "#FFF" }} />

                    <Slider />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.name
}

export default connect(mapStateToProps, {})(Two)