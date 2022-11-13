import React from "react";
import { StatusBar } from "expo-status-bar";

import Home from "./screens/Home";

import { Container } from "./styles/Styles";

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}
