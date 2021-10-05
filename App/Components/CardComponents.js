import React, { memo } from "react";
// import PropTypes from 'prop-types'
import { View, Text, Image } from "react-native";
import Button from "./Button";
import Images from "../Images";
const { IcBokmark } = Images;

// Styles
import styles from "./Styles/CardComponentsStyle";
import { apply } from "../Themes/OsmiProvider";

const CardComponents = (props) => {
  return (
    <Button onPress={props.onPress} style={styles.container}>
      <View style={apply("items-end")}>
        <IcBokmark />
      </View>
      <Image
        source={props.image}
        style={apply("w-130 h-130 -mt-30")}
        resizeMode="cover"
      />
      <Text style={apply("font-medium")}>{props.name}</Text>
      <Text style={apply("font-regular text-13")}>
        {props.price}
        <Text style={apply("text-10")}>.00</Text>
      </Text>
    </Button>
  );
};

// // Prop type warnings
// CardComponents.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// CardComponents.defaultProps = {
//   someSetting: false
// }

export default memo(CardComponents);
