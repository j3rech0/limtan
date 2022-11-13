import React from "react";

import {
  ListView,
  ListViewNoData,
  ListText,
  ListUser,
  DelButton,
  ListContent,
  CloseButton,
  HideText,
} from "../styles/Styles";

import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SwipeListView } from "react-native-swipe-list-view";
import base64 from "react-native-base64";

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
      const str = this;
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
  // Swipe

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <>
      {lists.length == 0 && (
        <ListViewNoData>
          <Text style={{ fontFamily: "Inter_400Regular" }}>No data!!!</Text>
        </ListViewNoData>
      )}
      <SwipeListView
        style={{ marginBottom: 20 }}
        data={lists}
        keyExtractor={(item) => String(item.id)}
        leftOpenValue={250}
        rightOpenValue={-35}
        previewOpenValue={-35}
        previewOpenDelay={2000}
        showsVerticalScrollIndicator={false}
        renderItem={(data) => {
          return (
            <ListView onPress={() => {}} underlayColor="#ffffff">
              <>
                <ListContent>
                  <ListText>{data.item.title.toLowerCase()}</ListText>
                  <ListUser>
                    {replaceVowels(base64.encode(data.item.user))}:
                    {replaceVowels(
                      capitalizeFirstLetter(base64.encode(data.item.pass))
                    )}
                  </ListUser>
                </ListContent>
              </>
            </ListView>
          );
        }}
        renderHiddenItem={(data, rowMap) => (
          <>
            <DelButton
              onPress={() => {
                handleDel(data.index);
              }}
              activeOpacity={0.8}
            >
              <MaterialIcons name="delete" size={23} color="#DB4444" />
            </DelButton>
            <CloseButton
              onPress={() => {
                closeRow(rowMap, data.item.id);
              }}
              activeOpacity={0.8}
            >
              <HideText style={{ fontFamily: "Inter_400Regular" }}>
                {replaceVowels(data.item.user)}:
                {replaceVowels(capitalizeFirstLetter(data.item.pass))}
              </HideText>
              <MaterialIcons name="close" size={23} color="#52A8AE" />
            </CloseButton>
          </>
        )}
      />
    </>
  );
};
export default List;
