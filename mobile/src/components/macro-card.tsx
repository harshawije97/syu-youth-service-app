import { globalStyles } from "@/styles/global";
import { View, Text } from "react-native";

type MacroCardProps = {
  label: string;
  value: string;
  goal: string;
  color: string;
};

export default function MacroCard({
  label,
  value,
  goal,
  color,
}: MacroCardProps) {
  return (
    <View style={[globalStyles.card, { borderLeftColor: color }]}>
      <Text style={globalStyles.label}>{label}</Text>
      <Text style={globalStyles.value}>{value}</Text>
      <Text style={globalStyles.goal}>/ {goal}</Text>
    </View>
  );
}
