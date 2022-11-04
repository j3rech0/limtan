import React from "react";
import { Image } from "react-native";
import { HeaderView } from "../styles/Styles";
import Logo from "../assets/logo-head.png";

const Header = () => {
  return (
    <HeaderView>
      <Image
        source={Logo}
        style={{
          width: 120,
          height: 18,
          resizeMode: "stretch",
        }}
      />
    </HeaderView>
  );
};

export default Header;
