import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { useTheme } from '@/context/ThemeContext';

const Carousel = () => {
    const flatListRef = useRef(null);
    const screenWidth = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();

    const imageWidth = screenWidth * 0.8; // Reduce the image width to make sides visible
    const gap = 10; // Set a gap between images

    const CarouselData = [
        {
            id: '1',
            title: "num",
            image: require('@/assets/images/property1.jpeg'),
            description: 'lorem ipsum libero'
        },
        {
            id: '2',
            title: "num",
            image: require('@/assets/images/property2.jpeg'),
            description: 'lorem ipsum libero'
        },
        {
            id: '3',
            title: "num",
            image: require('@/assets/images/property3.jpeg'),
            description: 'lorem ipsum libero'
        },
        {
            id: '4',
            title: "num",
            image: require('@/assets/images/property4.jpeg'),
            description: 'lorem ipsum libero'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = activeIndex === CarouselData.length - 1 ? 0 : activeIndex + 1;
            setActiveIndex(nextIndex);
            if (flatListRef.current) {
                flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const getItemLayout = (_, index) => ({
        length: imageWidth + gap * 2, 
        offset: (imageWidth + gap * 2) * index,
        index
    });

    const renderItem = ({ item }) => (
        <View style={{ marginHorizontal: gap }}>
            <Image source={item.image} style={{ height: 200, width: imageWidth, borderRadius: 20 }} />
        </View>
    );

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.floor(scrollPosition / (imageWidth + gap * 2));
        setActiveIndex(index);
    };

    const renderDotIndicators = () => {
        return CarouselData.map((dot, index) => (
            <View
                key={dot.id}
                style={{
                    backgroundColor: activeIndex === index ? "#000" : "gray",
                    height: 3,
                    width: 10,
                    borderRadius: 5,
                    marginHorizontal: 3
                }}
            />
        ));
    };

    return (
        <View>
            <Text style={{
                fontWeight: "800",
                fontSize: 20,
                marginBottom: 15,
                color: isDarkMode ? '#fff' : '#000'
            }}>
                {t('Rentable Houses')}
            </Text>
            <FlatList
                ref={flatListRef}
                getItemLayout={getItemLayout}
                data={CarouselData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                onScroll={handleScroll}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: gap }} 
            />
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30 }}>
                {renderDotIndicators()}
            </View>
        </View>
    );
};

export default Carousel;
