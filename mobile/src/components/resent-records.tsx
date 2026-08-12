import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global";
import SingleRecord from "./single-record";

export default function ResentRecords() {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      <SingleRecord
        name="Chicken & Rice"
        calories={540}
        protein={45}
        carbs={50}
        fat={12}
      />
      <SingleRecord
        name="Protein Shake"
        calories={280}
        protein={30}
        carbs={20}
        fat={8}
      />
      <SingleRecord
        name="Salmon Salad"
        calories={430}
        protein={35}
        carbs={10}
        fat={25}
      />
    </View>
  );
}
