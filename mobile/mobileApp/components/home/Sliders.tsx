import { StyleSheet, FlatList, View, ViewToken, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ImageSliderType } from '@/app/data/Slider1'
import SliderItem from './SliderItem'
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  scrollTo,
} from 'react-native-reanimated'
import Pagination from './pagination'

type Props = {
  itemList: ImageSliderType[]
}

const Slider = ({ itemList }: Props) => {
  const screenWidth = Dimensions.get('window').width // Get the screen width

  const [data, setData] = useState(itemList)
  const ref = useAnimatedRef<Animated.FlatList<any>>()
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const interval = useRef<NodeJS.Timeout>()
  const offset = useSharedValue(0)
  const scrollX = useSharedValue(0)

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x
    },
    onMomentumEnd: (e) => {
      offset.value = e.contentOffset.x
    },
  })

  useEffect(() => {
    if (isAutoPlay) {
      interval.current = setInterval(() => {
        offset.value =
          (offset.value + screenWidth) % (screenWidth * data.length)
      }, 5000)
    } else {
      clearInterval(interval.current)
    }

    return () => {
      clearInterval(interval.current)
    }
  }, [isAutoPlay, offset, screenWidth, data.length])

  useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true)
  })

  const [paginationIndex, setPaginationIndex] = useState(0)

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  }

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[]
  }) => {
    if (
      viewableItems.length > 0 &&
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index % itemList.length)
    }
  }

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ])

  return (
    <View>
      <Animated.FlatList
        data={data}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([...data, ...itemList])}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false)
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true)
        }}
      />
      <Pagination
        items={itemList}
        scrollX={scrollX}
        paginationIndex={paginationIndex}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})
