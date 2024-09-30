import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {COLORS, SIZES} from "../../constants"
const ProductsRow = () => {
  const products = [1,2, 3, 4]
  return (
    <FlatList 
    data={products}
    renderItem={({item}) => (<Text>Products</Text>)}
    />
  )
}

export default ProductsRow

const styles = StyleSheet.create({

})