import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Carousel from 'react-native-snap-carousel'

const {width: screenWidth} = Dimensions.get("window")
const dummyData = [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
    { id: 4, title: "Title 4" },
    { id: 5, title: "Title 5" },
]

const MyCarousel = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    )
    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={screenWidth}
            itemWidth = {screenWidth}
            layout={'default'}
        />
    )
}
export default function ImageCarousel() {
    return (
        <View style={styles.container}>
            <Text style={styles.container}>Carousel</Text>
            <MyCarousel data={dummyData}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
marginTop: 20
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
        color: "blue",
    },
    card: {
        backgroundColor: "#c4c4c4",
        borderRadius: 10,
        padding: 20
    }
})