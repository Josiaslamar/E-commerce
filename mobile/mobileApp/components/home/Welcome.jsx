import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import styles from "./Welcome.style"
import React from "react"
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native"
const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                <Text style={[styles.welcomeText(COLORS.black, SIZES.xSmall), { fontSize: SIZES.xLarge }]}>{" "}Find the Most</Text>
                <Text style={[styles.welcomeText(COLORS.primary, 0), { fontSize: SIZES.xLarge }]}>{" "}Luxurious Furniture</Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name='search' size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPress={() => navigation.navigate("Search")}
                        placeholder="what are you looking for?"
                    />
                </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite}/>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default Welcome
