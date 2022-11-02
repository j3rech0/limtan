import React from "react";
import { Text } from "react-native";
import { HeaderView, HeaderTitle, HeaderButton } from "../styles/Styles";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  // const clearAll = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  return (
    <HeaderView>
      <HeaderTitle>Limtan</HeaderTitle>
      {/* <HeaderButton onPress={clearAll}>
        <Text>Clear</Text>
      </HeaderButton> */}
    </HeaderView>
  );
};

export default Header;
