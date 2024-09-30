import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { COLORS, SIZES } from '../../constants';

const { width } = Dimensions.get('window');

const MainCarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null); 
    const slides = [
        require('../../assets/images/fn1.jpg'),
        require('../../assets/images/fn2.jpg'),
        require('../../assets/images/fn3.jpg'),
        require('../../assets/images/fn4.jpg'),
        require('../../assets/images/fn5.jpg'),
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % slides.length;
            setActiveIndex(nextIndex);
            if (carouselRef.current) {
                carouselRef.current.scrollTo({ index: nextIndex, animated: true });
            }
        }, 3000); 

        return () => clearInterval(interval); 
    }, [activeIndex, slides.length]);

    const Pagination = () => {
        return (
            <View style={styles.paginationContainer}>
                {slides.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            setActiveIndex(index); 
                            if (carouselRef.current) {
                                carouselRef.current.scrollTo({ index, animated: true });
                            }
                        }}
                    >
                        <View
                            style={[
                                styles.dot,
                                index === activeIndex ? styles.activeDot : styles.inactiveDot,
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef} 
                loop={true}
                width={width * 0.95}
                height={200}
                data={slides}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setActiveIndex(index)} 
                renderItem={({ index }) => (
                    <Image
                        source={slides[index]}
                        style={styles.image}
                    />
                )}
            />
            <Pagination />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    paginationContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: COLORS.primary,
    },
    inactiveDot: {
        backgroundColor: COLORS.secondary,
    },
});

export default MainCarouselComponent;
