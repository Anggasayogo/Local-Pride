import React from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../../Redux/YourRedux'
import { ScrollView, Text, FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Compoennets
import CardComponents from '../../Components/CardComponents'

// Styles
import Images from '../../Images'
import styles from '../Styles/Home/homeScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const homeScreen = props => {
  const {IcCategory, IcBell} = Images
  const isDumy = [
    {
      name: "Nike Air Jordan X",
      price: "$135"
    },
    {
      name: "Nike Air Jordan X",
      price: "$135"
    },
    {
      name: "Nike Air Jordan X",
      price: "$135"
    },
    {
      name: "Nike Air Jordan X",
      price: "$135"
    },
    {
      name: "Nike Air Jordan X",
      price: "$135"
    },
    {
      name: "Nike Air Jordan X",
      price: "$135"
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <View style={apply("row justify-between")}>
        <IcCategory/>
        <IcBell/>
      </View>
      <Text style={apply("font-semibold text-24 mt-5")}>Perfect Shoes</Text>
      <Text style={apply("font-regular text-16 mb-5")}>For perfect style</Text>
      <FlatList
        data={isDumy}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item})=>( <CardComponents name={item.name} price={item.price} /> )}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(homeScreen)
