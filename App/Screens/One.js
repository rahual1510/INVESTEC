
import React, { Component } from 'react';
import { View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import CustomTextInput from '../Component/CustomTextInput'
import Button from '../Component/Button';
import { setName } from "../Actions/save";

export class One extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    onChangeText = (value) => {
        this.setState({
            value
        })
    }

    submit = (value) => {
        this.props.setName({ prop: "name", value: this.state.value.trim() });
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: hp("5%") }}>
                <CustomTextInput
                    onChangeText={this.onChangeText}
                    placeholder={"Enter your name"}
                    value={this.state.value}
                />
                <Button title={"Press me"} value={"one"} onPress={this.submit} customStyle={{ backgroundColor: "black", marginTop: hp("3%") }} textStyle={{ color: "#FFF" }} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.name
}

export default connect(mapStateToProps, { setName })(One)