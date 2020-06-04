import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AppStyles, Colors } from '../Themes';
import { height, totalSize, width } from 'react-native-dimension';
import { Icon } from 'react-native-elements';

class InputWithTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, require, inputStyle, autoFocus, iconName, iconType, onPress } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={{}}>
                {
                    title ?
                        <View style={[AppStyles.compContainer, { marginBottom: height(0.5) }]}>
                            <Text style={[AppStyles.textMedium, { color: Colors.appColor1 }]}>{title}
                                {
                                    require ?
                                        <Text style={[AppStyles.h5, { color: 'red' }]}>  *</Text>
                                        :
                                        null
                                }
                            </Text>
                        </View>
                        :
                        null
                }
                <View style={{ justifyContent: 'center' }}>
                    <TextInput
                        scrollEnabled={this.props.scrollEnabled}
                        onFocus={this.props.onFocus}
                        editable={this.props.editable}
                        multiline={this.props.multiline}
                        value={this.props.value}
                        autoFocus={autoFocus}
                        onChangeText={this.props.onChangeText}
                        placeholder={this.props.placeholder}
                        style={[AppStyles.inputFieldColored, { height: height(8), borderRadius: 10, paddingLeft: width(5),paddingRight:width(10),elevation:0,backgroundColor:Colors.appBgColor2 }, inputStyle]}
                    />
                    {
                        iconName ?
                            <View style={{ position: 'absolute', right: width(10) }}>
                                <Icon
                                    name={iconName ? iconName : "ios-arrow-down"}
                                    type={iconType ? iconType : "ionicon"}
                                    size={totalSize(2)}
                                    color={Colors.appTextColor4}
                                />
                            </View>
                            :
                            null
                    }
                </View>
            </TouchableOpacity>
        );
    }
}

export default InputWithTitle;
