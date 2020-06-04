import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider, TextInput } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import SnapSlider from 'react-native-snap-slider'

const Colors = {
    purple: '#651a93',
    orange: '#f9c400',
    whisper: '#f0edf4',
    white: '#ffffff',
    steel: '#cccccc',
    black: '#000000'
}


class Wish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories_list: [
                {
                    title: 'Book',
                    iconName: 'book-open-page-variant',
                    iconType: 'material-community',
                },
                {
                    title: 'Car',
                    iconName: 'car-side',
                    iconType: 'material-community',
                },
                {
                    title: 'Tools',
                    iconName: 'toolbox',
                    iconType: 'material-community',
                },
                {
                    title: 'Technology',
                    iconName: 'lightbulb-on',
                    iconType: 'material-community',
                },
                {
                    title: 'Indoor',
                    iconName: 'home',
                    iconType: 'material-community',
                },
                {
                    title: 'All',
                    iconName: 'check-all',
                    iconType: 'material-community',
                },
                {
                    title: 'Clothes',
                    iconName: 'tshirt-crew',
                    iconType: 'material-community',
                },
            ],
            selectedCategoryIndex: 0,
            sliderOptions: [
                { value: 0, label: 'Poor' },
                { value: 1, label: 'Fair' },
                { value: 2, label: 'Good' },
                { value: 3, label: 'Great' },
                { value: 4, label: 'New' },
            ],
        };
        // this.slidingComplete = this.slidingComplete.bind(this);
    }
    slidingComplete = (itemSelected) => {
        console.warn(itemSelected);
        //console.warn("item selected " + this.refs.slider.state.item);
        //console.warn("item selected(from callback)" + itemSelected);
        //  console.warn("value " + this.sliderOptions[this.refs.slider.state.item].value);
    }
    LineHorizontal = ({ style }) => {
        return (
            <View style={[styles.lineHorizontal, style]}></View>
        )
    }
    _renderItem = ({ item, index }) => {
        return (
            <View style={{ padding: 5 }}>
                <View style={index === this.state.selectedCategoryIndex ? [styles.categorySlideActive, styles.shadow] : [styles.categorySlideInactive, styles.shadow]}>
                    <Icon
                        name={item.iconName}
                        type={item.iconType}
                        color={index === this.state.selectedCategoryIndex ? Colors.orange : Colors.steel}
                        size={totalSize(2.5)}
                    />
                </View>
            </View>
        );
    }
    render() {
        const { categories_list, selectedCategoryIndex, sliderOptions } = this.state
        return (
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.compContainer}>
                        <Text style={styles.title}>Category</Text>
                        <Text style={styles.detail}>Which category best describes the item?</Text>
                    </View>
                    <View style={{ justifyContent: 'center', backgroundColor: 'transparent' }}>
                        <this.LineHorizontal style={{ position: 'absolute', right: 0, left: 0, borderBottomColor: Colors.orange, borderBottomWidth: 2 }} />
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={categories_list}
                            layout={'default'}
                            layoutCardOffset={`10`}
                            activeSlideOffset={10}
                            enableSnap={true}
                            renderItem={this._renderItem}
                            sliderWidth={width(100)}
                            itemWidth={width(15)}
                            inactiveSlideOpacity={1}
                            inactiveSlideScale={0.8}
                            onSnapToItem={(index) => this.setState({ selectedCategoryIndex: index })}
                        />
                    </View>
                    <Text style={[styles.SelectedItem, styles.textCenter, { marginTop: height(1) }]}>{categories_list[selectedCategoryIndex].title}</Text>
                </View>
                <this.LineHorizontal />
                <View>
                    <View style={styles.compContainer}>
                        <Text style={styles.title}>Condition</Text>
                        <Text style={styles.detail}>Tap the scale to specify the condition you want the item in.</Text>
                    </View>
                    <View>
                        <SnapSlider
                            ref="slider"
                            containerStyle={styles.snapsliderContainer}
                            style={styles.snapslider}
                            itemWrapperStyle={styles.snapsliderItemWrapper}
                            itemStyle={styles.SelectedItem}
                            items={sliderOptions}
                            labelPosition="bottom"
                            minimumTrackTintColor={Colors.orange}
                            maximumTrackTintColor={Colors.white}
                            thumbTintColor={Colors.orange}
                            defaultItem={1}
                            onSlidingComplete={this.slidingComplete}
                        />

                    </View>
                </View>
                <this.LineHorizontal />
                <View>
                    <View style={styles.compContainer}>
                        <Text style={styles.title}>Location</Text>
                        <Text style={styles.detail}>Enter your zip code and a maximum distance away from you to search through.</Text>
                    </View>
                    <View style={[styles.rowCompContainer]}>
                        <View style={{ flex: 5 }}>

                        </View>
                        <View style={{ flex: 5, backgroundColor: 'transparent' }}>
                            <TextInput
                                placeholder="zip code"
                                style={{ backgroundColor: Colors.white, borderRadius: 100, marginHorizontal: width(5), textAlign: 'center', fontSize: totalSize(1.75) }}
                            />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={[styles.SelectedItem, styles.textCenter,{marginTop:height(2)}]}>Max. Distance</Text>
                                <View style={[styles.rowView,{marginTop:height(1.5)}]}>
                                    <TextInput
                                        placeholder="#"
                                        style={{ backgroundColor: Colors.white, borderRadius: 100, textAlign: 'center', fontSize: totalSize(1.75), paddingHorizontal: width(5),marginRight:width(2.5) }}
                                    />
                                    <Text style={[styles.SelectedItem, styles.textCenter]}>miles</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Wish;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.whisper
    },
    compContainer: {
        marginHorizontal: width(5),
        marginVertical: height(2.5)
    },
    rowCompContainer: {
        marginHorizontal: width(5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: height(2.5)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadow: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: Colors.black,
        shadowOpacity: 0.25,
        elevation: 5
    },
    lineHorizontal: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.white,
        marginVertical: height(2.5)
    },
    title: {
        fontSize: totalSize(2),
        fontWeight: 'bold',
        color: Colors.purple
    },
    detail: {
        fontSize: totalSize(1.5),
        fontWeight: 'normal',
        color: Colors.purple
    },
    SelectedItem: {
        fontSize: totalSize(1.6),
        fontWeight: '600',
        color: Colors.purple
    },
    categorySlideInactive: {
        height: totalSize(5),
        width: totalSize(5),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
    },
    categorySlideActive: {
        height: totalSize(5),
        width: totalSize(5),
        borderWidth: 2,
        borderColor: Colors.orange,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignSelf: 'center',
    },
    textCenter: {
        textAlign: 'center'
    },
    snapsliderContainer: {
        marginHorizontal: width(5)
    },
    snapslider: {
        // backgroundColor:'red'
    },
    snapsliderItemWrapper: {
        // backgroundColor:'red'
    },
    snapsliderItem: {
        color: 'red'
    }
})