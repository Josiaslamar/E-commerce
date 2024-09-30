import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {COLORS, SIZES} from "../../constants";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

const Heading = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Rivals</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name="view-grid-plus" size={24} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginBottom: SIZES.xSmall,
        marginHorizontal: 12
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontFamily: "semibold",
        fontSize: SIZES.xLarge -2
    }
})