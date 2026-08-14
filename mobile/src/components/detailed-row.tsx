import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global";

const DetailedRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <View style={globalStyles.detailRow}>
      <Text style={globalStyles.detailLabel}>{label}</Text>
      <Text style={globalStyles.detailValue}>{value}</Text>
    </View>
  );
};

export default DetailedRow;
