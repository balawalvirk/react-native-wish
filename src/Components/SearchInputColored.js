import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors, Images, Icons, AppStyles, FontSize } from '../Themes';
import { Icon } from 'react-native-elements';
import { totalSize, height, width } from 'react-native-dimension';
import { CustomIcon } from '.';

class SearchInputColored extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onChangeText, editable, autoFocus, onPress, value, onPressFilter, placeholder, containerStyle } = this.props
        return (
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[AppStyles.inputContainerColored, AppStyles.shadow, { borderRadius: 100, justifyContent: 'flex-start', backgroundColor: Colors.appTextColor6 }, containerStyle]}>
                <View style={{ flex: 1.5, alignItems: "center" }}>
                    <Icon
                        name="ios-search"
                        type="ionicon"
                        size={totalSize(2)}
                        color={Colors.appTextColor5}
                    />
                </View>
                <View style={{ flex: 7 }}>
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor={Colors.appTextColor5}
                        value={value}
                        onChangeText={onChangeText}
                        editable={editable}
                        autoFocus={autoFocus}
                        style={[AppStyles.inputField, { fontSize: FontSize.medium, width: null, backgroundColor: 'transparent', height: height(7), paddingHorizontal: 10, color: Colors.appTextColor1 }]}
                    />
                </View>
                <View style={{ flex: 1.5, alignItems: 'center' }}>
                    <Icon
                        name="ios-options"
                        type="ionicon"
                        size={totalSize(2)}
                        color={Colors.appColor1}
                        onPress={onPressFilter}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

export default SearchInputColored;
