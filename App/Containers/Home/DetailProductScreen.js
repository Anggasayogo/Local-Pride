import React from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../../Redux/YourRedux'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../Images'

// Components
import AppHeader from '../../Components/AppHeader'

// Styles
import styles from '../Styles/Home/DetailProductScreenStyle'
import { apply } from '../../Themes/OsmiProvider'
import Button from '../../Components/Button'

const DetailProductScreen = props => {
  const {item} = props.route.params
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={apply("mt-3 px-3")}>
        <AppHeader label="Detail" BackButton={()=> props.navigation.goBack()}/>
      </View>
      <View style={apply("mt-4 px-4")}>
        <Text style={apply("text-13 font-light")}>Men Shoe’s</Text>
        <Text style={apply("text-20 font-bold")}>{item.name}</Text>
        <Text style={apply("text-14 font-regular")}>4,9 (130 Reviews)</Text>
      </View>
      <View style={apply("items-center justify-center -mt-35")}>
        <Image source={item.image} style={[apply("w-250 h-250"), {marginTop: '10%'}]}/>
      </View>
      <View style={apply("self-end -mt-120 px-4 mb-5")}>
          <Button style={apply("w-48 h-40 b-10 border border-gray-500 my-1 items-center justify-center")}>
            <Image source={item.image} style={apply("w-48 h-40")}/>
          </Button>
          <Button style={apply("w-48 h-40 b-10 border border-red-400 my-1 items-center justify-center")}>
            <Image source={item.image} style={apply("w-48 h-40")}/>
          </Button>
          <Button style={apply("w-48 h-40 b-10 border border-gray-500 my-1 items-center justify-center")}>
            <Image source={item.image} style={apply("w-48 h-40")}/>
          </Button>
      </View>
      <View style={apply("flex bg-white shadow border-top-right-radius-40 border-top-left-radius-40 p-5")}>
        <View style={apply("row items-center my-4")}>
          <Text style={apply("text-16 font-medium mr-3")}>Color</Text>
          <View style={apply("w-21 h-21 b-10 bg-black mr-1")}/>
          <View style={apply("w-21 h-21 b-10 bg-primary mr-1")}/>
          <View style={apply("w-21 h-21 b-10 bg-red mr-1")}/>
        </View>
        <View>
          <Text style={apply("text-16 font-medium mb-1")}>Description</Text>
          <Text style={apply("text-14 font-reguar")}>Elegantly designed to make you look more stylish, also made from the best materials of its class as well as the technology embedded in these shoes.. <Text style={apply("text-14 font-medium color-primary")}>Read More</Text></Text>
        </View>
        <View style={apply("justify-between row items-center my-4")}>
          <Text style={apply("text-20 font-medium mr-3")}>Size</Text>
          <View style={apply("row items-center")}>
            <Text style={apply("text-20 font-medium mr-3")}>UK</Text>
            <Text style={apply("text-20 font-medium mr-3")}>US</Text>
            <Text style={apply("text-20 font-medium mr-3")}>EU</Text>
          </View>
        </View>
        <View style={apply("mb-5 row items-center")}>
          <Button style={apply("w-48 h-40 b-10 border border-gray-400 my-1 items-center justify-center mr-3")}>
            <Text style={apply("text-24 font-regular color-ecalipse")}>40</Text>
          </Button>
          <Button style={apply("w-48 h-40 b-10 border border-red-400 my-1 items-center justify-center mr-3")}>
            <Text style={apply("text-24 font-medium")}>41</Text>
          </Button>
          <Button style={apply("w-48 h-40 b-10 border border-gray-400 my-1 items-center justify-center")}>
            <Text style={apply("text-24 font-regular color-ecalipse")}>42</Text>
          </Button>
        </View>
        <Button style={apply("h-50 bg-primary b-16 items-center justify-center")}>
          <Text style={apply("text-16 font-medium text-white")}>Add To Cart</Text>
        </Button>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailProductScreen)
