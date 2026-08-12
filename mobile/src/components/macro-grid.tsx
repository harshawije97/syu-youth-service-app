import { View } from "react-native";
import MacroCard from "./macro-card";
import { globalStyles } from "@/styles/global";

export default function MacroGrid() {
  return (
    <View style={globalStyles.grid}>
      <MacroCard label="Registered" value="0" goal="65" color="#6bcb77" />
      <MacroCard label="Scanned" value="0" goal="150" color="#4ecdc4" />
      <MacroCard label="Manual" value="0" goal="250" color="#ffd93d" />
      <MacroCard label="Rejected" value="0" goal="20" color="#ff6b6b" />
    </View>
  );
}
