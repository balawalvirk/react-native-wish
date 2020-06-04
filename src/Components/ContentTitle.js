import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { AppStyles, FontFamily, Colors } from '../Themes';
import { height } from 'react-native-dimension';

class ContentTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { title, hideSeeAll, titleStyle, onPressSeeAll } = this.props
        return (
            <View style={[AppStyles.rowCompContainer, { marginBottom: height(1.5), }]}>
                <Text style={[AppStyles.h5, { fontFamily: FontFamily.appTextBold, }, AppStyles.textBlue, titleStyle]}>{title ? title : 'Title'}</Text>
                {
                    hideSeeAll ?
                        null
                        :
                        <Text onPress={onPressSeeAll} style={[AppStyles.textSmall, { color: Colors.appColor1 }]}>See All</Text>
                }
            </View>
        );
    }
}

export default ContentTitle;
