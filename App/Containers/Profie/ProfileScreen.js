import React from "react";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../../Redux/YourRedux'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Styles
// import styles from '../Styles/Profie/ProfileScreenStyle'
import { apply } from "../../Themes/OsmiProvider";
import profil from "../../Fixtures/profil.json";

const ProfileScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar3.png",
            }}
          />
          <Text style={styles.name}>Jane Doe</Text>
        </View>
      </View>

      <View style={styles.body}>
        <FlatList
          style={styles.container}
          enableEmptySections={true}
          data={profil.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={styles.box}>
                  <Image style={styles.icon} source={{ uri: item.image }} />
                  <Text style={styles.title}>{item.title}</Text>
                  <Image
                    style={styles.btn}
                    source={{
                      uri: "https://img.icons8.com/customer/office/40",
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#EE82EE",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FF6347",
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
    color: "#EE82EE",
    marginLeft: 4,
  },
  btn: {
    marginLeft: "auto",
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: "#E6E6FA",
  },
  box: {
    padding: 5,
    marginBottom: 2,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  username: {
    color: "#20B2AA",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
});
