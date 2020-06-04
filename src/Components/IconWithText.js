import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CustomIcon } from '.';
import { totalSize } from 'react-native-dimension';
import { AppStyles, Colors, FontFamily } from '../Themes';
import { Icon } from 'react-native-elements';

class IconWithText extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { text, containerStyle, customIcon, onPress, tintColor, iconName, iconType, iconSize, column, textStyle } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ flexDirection: column ? 'column' : 'row', alignItems: 'center', }, containerStyle]}>
                {
                    customIcon ?
                        <CustomIcon source={customIcon} size={iconSize ? iconSize : totalSize(2.5)} color={tintColor ? tintColor : Colors.appTextColor1} />
                        :
                        <Icon name={iconName ? iconName : 'email'} type={iconType ? iconType : 'material-community'} size={iconSize ? iconSize : totalSize(2.5)} color={tintColor ? tintColor : Colors.appTextColor1} />
                }
                <Text style={[AppStyles.textRegular, { color: tintColor ? tintColor : Colors.appTextColor1, marginHorizontal: 5, fontFamily: FontFamily.appTextLight }, textStyle]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

export default IconWithText;
