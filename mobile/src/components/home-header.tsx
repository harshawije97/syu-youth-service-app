import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global";

const HomeHeader = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.date}>{currentDate}</Text>
    </View>
  );
};

export default HomeHeader;
