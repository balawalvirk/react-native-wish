import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppStyles, Colors, FontSize } from '../Themes';
import { Icon } from 'react-native-elements';
import { totalSize } from 'react-native-dimension';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { tintColor, iconSize, textSize } = this.props
        return (
            <View style={AppStyles.rowCompContainer}>
                <Text style={[AppStyles.h3, { color: tintColor ? tintColor : Colors.appColor1, fontSize: textSize ? textSize : FontSize.h4 }]}>Hirengin  </Text>
                <Icon
                    name="ios-chatboxes"
                    type="ionicon"
                    size={iconSize ? iconSize : totalSize(5)}
                    color={tintColor ? tintColor : Colors.appColor1}
                />
            </View>
        );
    }
}

export default Logo;
