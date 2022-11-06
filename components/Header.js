import React from "react";
import { Image, PixelRatio } from "react-native";
import { HeaderView } from "../styles/Styles";
import Logo from "../assets/logo-head.png";

const Header = () => {
  return (
    <HeaderView>
      <Image
        source={Logo}
        style={{
          width: PixelRatio.getPixelSizeForLayoutSize(30),
          height: PixelRatio.getPixelSizeForLayoutSize(30),
        }}
      />
    </HeaderView>
  );
};

export default Header;
