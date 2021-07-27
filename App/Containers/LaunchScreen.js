import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { StatusBar, Image, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../Images'

// Components
import Button from '../Components/Button'

// Styles
import styles from './Styles/LaunchScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const LaunchScreen = props => {
  const _navigateExplore = useCallback(() => props.navigation.navigate("MainApp"), [])

  useEffect(() => {
    setTimeout(()=>{
      _navigateExplore()
    },2000)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor={apply('white')} />
      <Image source={Images.appLogo} style={styles.appLogo} />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
