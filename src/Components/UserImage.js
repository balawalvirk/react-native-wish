import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Colors, AppStyles } from '../Themes';
import { totalSize } from 'react-native-dimension';

class UserImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { source, size } = this.props
        const defaultSize = totalSize(5)
        return (
            <View style={[{ backgroundColor: Colors.appBgColor1, borderRadius: 100, }, AppStyles.shadow]}>
                <Image
                    source={source}
                    style={{ height: size ? size : defaultSize, width: size ? size : defaultSize, borderRadius: 100 }}
                />
            </View>
        );
    }
}

export default UserImage;
