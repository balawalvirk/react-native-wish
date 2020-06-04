import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { width, height } from 'react-native-dimension';
import { Colors, AppStyles, FontFamily } from '../Themes';

class EngineeringItemCardHorizontal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onPress, containerStyle, image, title } = this.props
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                style={[{ width: width(40) }, AppStyles.shadow, containerStyle]}
            >
                <Image
                    source={image}
                    style={{ height: height(20), width: null, borderRadius: 10 }}
                />
                <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: Colors.appBgColor4 + 40, borderRadius: 10,justifyContent:'flex-end' }}>
                    <View style={AppStyles.compContainer}>
                        <Text style={[AppStyles.h6, AppStyles.textWhite, AppStyles.textCenter,{fontFamily:FontFamily.appTextBold}]}>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default EngineeringItemCardHorizontal;
