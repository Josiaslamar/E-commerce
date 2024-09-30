import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./Home.style"
import { Fontisto, Ionicons } from "@expo/vector-icons"
import { Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Heading from '../components/home/Heading';
import ProductsRow from '../components/products/ProductsRow';


const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Goma DRcongo</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>9</Text>
            </View>
            <TouchableOpacity>
            <Fontisto name='shopping-bag' size={24}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        {/* <ProductsRow /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

