import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Images from '../Images'
const { IcArrowLeft, IcBokmark } = Images

// Compoennts
import Button from './Button'

// Styles
import styles from './Styles/AppHeaderStyle'
import { apply } from '../Themes/OsmiProvider'

const AppHeader = props => {
  return (
    <View style={styles.container}>
      <Button onPress={props.BackButton} style={apply("w-40 h-40 b-10 bg-white items-center justify-center")}>
        <IcArrowLeft/>
      </Button>
      <Text style={apply("font-regular text-16")}>{props.label}</Text>
      <Button style={apply("w-40 h-40 b-10 bg-white items-center justify-center")}>
        <IcBokmark/>
      </Button>
    </View>
  )
}

// // Prop type warnings
// AppHeader.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// AppHeader.defaultProps = {
//   someSetting: false
// }

export default memo(AppHeader)
