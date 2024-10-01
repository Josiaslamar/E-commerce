import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: "num",
        image: require('@/assets/images/property1.jpeg'),
        description: 'lorem ipsum libero'
    },
    {
        title: "num",
        image: require('@/assets/images/property2.jpeg'),
        description: 'lorem ipsum libero'
    },
    {
        title: "num",
        image: require('@/assets/images/property3.jpeg'),
        description: 'lorem ipsum libero'
    },
    {
        title: "num",
        image: require('@/assets/images/property4.jpeg'),
        description: 'lorem ipsum libero'
    }
]