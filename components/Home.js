import React, { useState, useEffect } from "react";

import Header from "./Header";
import List from "./List";
import Add from "./Add";

import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = () => {
  // Start list with empty array
  const initialList = [];

  const [lists, setLists] = useState(initialList);

  // Checking localStorage value
  const getLSObject = async () => {
    const jsonValue = await AsyncStorage.getItem("accz");
    if (!jsonValue) return;
    setLists(JSON.parse(jsonValue));
  };

  // Initiate Modal
  const [modalVisible, setModalVisible] = useState(false);
  // Initiate inputs
  const [inputValue, setInputValue] = useState("");

  // Add new list
  const handleAdd = async (list) => {
    const accList = ["accz", JSON.stringify([list])] || [];
    const newList = [...lists, list];

    try {
      if (accList) {
        await AsyncStorage.getItem("accz").then((accList) => {
          const c = accList ? JSON.parse(accList) : [];
          c.push(list);
          AsyncStorage.setItem("accz", JSON.stringify(c));
          setLists(newList);
          setModalVisible(false);
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLSObject();
  }, []);
  return (
    <>
      <Header />
      <List lists={lists} setLists={setLists} />
      <Add
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAdd={handleAdd}
      />
    </>
  );
};

export default Home;
