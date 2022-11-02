import React from "react";

import {
  ListView,
  ListText,
  ListUser,
  DelButton,
  ListContent,
} from "../styles/Styles";

import { FlatList, Text } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const List = ({ lists, setLists }) => {
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

  return (
    <>
      {lists.length == 0 && (
        <ListView>
          <Text>No data.</Text>
        </ListView>
      )}
      <FlatList
        data={lists}
        renderItem={(data) => {
          return (
            <ListView>
              <>
                <ListContent>
                  <ListText>{data.item.platform}</ListText>
                  <ListText>{data.item.title}</ListText>
                  <ListUser>
                    {data.item.user}:{data.item.pass}
                  </ListUser>
                </ListContent>
                <DelButton
                  onPress={() => {
                    handleDel(data.index);
                  }}
                >
                  <Text>🗑️</Text>
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
