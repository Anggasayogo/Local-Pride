import React, { useState } from "react";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../../Redux/YourRedux'
import {
  Text,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Compoennets
import CardComponents from "../../Components/CardComponents";

// Styles
import Images from "../../Images";
import styles from "../Styles/Home/homeScreenStyle";
import { apply } from "../../Themes/OsmiProvider";

const homeScreen = (props) => {
  const {
    IcCategory,
    IcBell,
    IcFilter,
    IcSearch,
    sepatu1,
    sepatu2,
    sepatu3,
    sepatu4,
  } = Images;
  const [selected, setSelected] = useState("Nike");
  const isDumy = [
    {
      name: "Sepatu Koboy",
      price: "$99",
      image: sepatu1,
    },
    {
      name: "Sepatu Koboy 2",
      price: "$69",
      image: sepatu2,
    },
    {
      name: "Sepatu Safety",
      price: "$299",
      image: sepatu3,
    },
    {
      name: "Sepatu Kuda",
      price: "$100",
      image: sepatu4,
    },
    {
      name: "Sepatu Koboy 3",
      price: "$98",
      image: sepatu1,
    },
  ];
  const category = ["Nike", "Adidas", "Vans", "Fuma", "FYC", "Vatrobas"];

  const onSelected = (item) => {
    setSelected(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={apply("row justify-between mt-4")}>
        <IcCategory />
        <IcBell />
      </View>
      <Text style={apply("font-semibold text-24 mt-5")}>Perfect Shoes</Text>
      <Text style={apply("font-regular text-16 mb-5")}>For perfect style</Text>
      <View style={apply("row items-center")}>
        <View
          style={apply(
            "bg-white h-48 items-center justify-center shadow p-2 border-top-left-radius-14 border-bottom-left-radius-14"
          )}
        >
          <IcSearch />
        </View>
        <View style={apply("flex")}>
          <TextInput
            placeholder="Search For Shoes"
            style={apply(
              "h-48 bg-white shadow border-top-right-radius-14 border-bottom-right-radius-14"
            )}
          />
        </View>
        <View
          style={apply(
            "w-48 h-48 bg-primary items-center justify-center b-14 ml-4 shadow"
          )}
        >
          <IcFilter />
        </View>
      </View>
      <View style={apply("mb-5 mt-3")}>
        <FlatList
          data={category}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onSelected(item)}
              style={[
                styles.btnCatgory,
                selected === item ? apply("bg-primary") : apply("bg-white"),
              ]}
            >
              <Text
                style={
                  selected === item
                    ? apply("text-white font-regular mx-2")
                    : apply("text-black font-regular mx-2")
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={apply("flex items-center justify-center")}>
        <FlatList
          data={isDumy}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <CardComponents
              onPress={() =>
                props.navigation.navigate("DetailProduct", { item })
              }
              name={item.name}
              price={item.price}
              image={item.image}
            />
          )}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(homeScreen);
