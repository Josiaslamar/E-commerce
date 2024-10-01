import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageSliderType } from '@/app/data/Slider1'
import { Ionicons } from '@expo/vector-icons'
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'


const SliderItem = ({ item, index, scrollX }) => {
  // Get the screen width
  const screenWidth = Dimensions.get('window').width

  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            [-screenWidth * 0.25, 0, screenWidth * 0.25],
            Extrapolation.CLAMP,
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP,
          ),
        },
      ],
    }
  })

  return (
    <Animated.View
      style={[styles.itemContainer, rnAnimatedStyle, { width: screenWidth }]}
    >
      <Image
        source={item.image}
        style={{ width: screenWidth - 10, height: 220, borderRadius: 20 }}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.background}
      >
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="heart-outline" size={24} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
  itemContainer: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  background: {
    position: 'absolute',
    height: 220,
    width: 290,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.5,
  },
  description: {
    color: '#fff',
    fontSize: 12,
    letterSpacing: 1.2,
  },
  icon: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 5,
    borderRadius: 30,
  },
})
