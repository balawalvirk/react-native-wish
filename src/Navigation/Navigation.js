import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Wish} from '../Containers/MainFlow/Wish';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="splash"
            >
                <Stack.Screen
                    name="wish"
                    component={Wish}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
