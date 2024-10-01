import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/app/data/Slider1'
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'


const Pagination = ({
  items,
  paginationIndex,
  scrollX,
}) => {
  // Get the screen width
  const screenWidth = Dimensions.get("window").width
  
  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        const pgAnimatedStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [
              (index - 1) * screenWidth,
              index * screenWidth,
              (index + 1) * screenWidth,
            ],
            [8, 20, 0],
            Extrapolation.CLAMP,
          )
          return {
            width: dotWidth,
          }
        })
        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              pgAnimatedStyle,
              { backgroundColor: paginationIndex === index ? '#222' : '#aaa' },
            ]}
          />
        )
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#aaa',
  },
})
