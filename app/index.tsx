import React from "react";
import { View } from "react-native";
import Filter from "../components/filters";
import Footer from "../components/footer";
import Header from "../components/header";
import Cases from "../pages/cases";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E0EAFF"
      }}
    >
      <Header />
      <Filter />
      <Cases />
      <Footer />
    </View>
  );
}
