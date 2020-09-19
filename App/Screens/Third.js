

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';


export class Third extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }

    async componentWillMount() {
        let isEmulator = await DeviceInfo.isEmulator()
        this.setState({
            modalVisible: isEmulator
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    alignItems: "flex-end",
                    paddingRight: wp("5%")
                }}>
                    {
                        this.props.name ?
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: wp("8%")
                            }}>{this.props.name}</Text>
                            :
                            null
                    }
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}
                >
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => this.setState({ modalVisible: false })} style={{ marginBottom: hp("1%") }}>
                            <Image style={{ height: hp("4%"), width: hp("4%") }} resizeMode={"contain"} source={require("../Assets/Images/close.png")} />
                        </TouchableOpacity>
                        <View style={style.modalContiner}>
                            <Text>You are using emulator</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.name
}

export default connect(mapStateToProps, {})(Third)

const style = StyleSheet.create({
    modalContiner: {
        width: wp("80%"),
        backgroundColor: "#FFFFFF",
        paddingHorizontal: wp('3%'),
        paddingVertical: hp("2%"),
        borderRadius: hp('1%')
    },
})
