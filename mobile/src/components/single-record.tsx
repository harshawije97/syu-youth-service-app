import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global";

type MealItemProps = {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export default function SingleRecord({
  name,
  calories,
  protein,
  carbs,
  fat,
}: MealItemProps) {
  return (
    <View
      style={{
        backgroundColor: "#f8fafc",
        borderRadius: 10,
        padding: 16,
        marginBottom: 10,
      }}
    >
      <Text style={globalStyles.name}>{name}</Text>
      <Text style={globalStyles.macros}>
        {calories} cal • {protein}g P • {carbs}g C • {fat}g F
      </Text>
    </View>
  );
}
