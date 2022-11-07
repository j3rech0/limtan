import React from "react";

import {
  ListView,
  ListViewNoData,
  ListText,
  ListUser,
  DelButton,
  ListContent,
} from "../styles/Styles";

import { FlatList, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import AsyncStorage from "@react-native-async-storage/async-storage";

const List = ({ lists, setLists }) => {
  // fonts
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  // Check localStorage and update its value
  const getLSObject = async (item) => {
    try {
      const jsonValue = await AsyncStorage.getItem("accz");
      if (!jsonValue) return;
      let postsFav = JSON.parse(jsonValue);
      if (item > -1) {
        postsFav.splice(item, 1);
        await AsyncStorage.setItem("accz", JSON.stringify(postsFav));
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // Handle delete
  const handleDel = (rowKey) => {
    const newLists = [...lists];
    newLists.splice(rowKey, 1);
    getLSObject(rowKey);
    setLists(newLists);
  };

  // Capitalize first letter for data.user
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Replace all vowels
  const replaceVowels = (vowels) => {
    String.prototype.replaceAll = function (find, replace) {
      var str = this;
      return str.replace(
        new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"),
        replace
      );
    };
    String.prototype.replaceAt = function (index, replacement) {
      return (
        this.substring(0, index) +
        replacement +
        this.substring(index + replacement.length)
      );
    };
    vowels = vowels.replaceAll("a", "4");
    vowels = vowels.replaceAll("e", "3");
    vowels = vowels.replaceAll("i", "1");
    vowels = vowels.replaceAll("o", "0");
    return vowels.replaceAt(2, "...");
  };

  return (
    <>
      {lists.length == 0 && (
        <ListViewNoData>
          <Text style={{ fontFamily: "Inter_400Regular" }}>No data!!!</Text>
        </ListViewNoData>
      )}
      <FlatList
        style={{ marginBottom: 20 }}
        data={lists}
        renderItem={(data) => {
          return (
            <ListView>
              <>
                <ListContent>
                  {/* <ListText>{data.item.accounttype}</ListText> */}
                  <ListText>{data.item.title.toLowerCase()}</ListText>
                  <ListUser>
                    {replaceVowels(data.item.user)}:
                    {replaceVowels(capitalizeFirstLetter(data.item.pass))}
                  </ListUser>
                </ListContent>
                <DelButton
                  onPress={() => {
                    handleDel(data.index);
                  }}
                  activeOpacity={0.8}
                >
                  <MaterialIcons name="delete" size={28} color="#DB4444" />
                </DelButton>
              </>
            </ListView>
          );
        }}
      />
    </>
  );
};

export default List;
