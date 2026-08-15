import { View } from "react-native";
import MacroCard from "./macro-card";
import { globalStyles } from "@/styles/global";
import React from "react";
import { getLocalClients } from "@/services/client";

export default function MacroGrid() {
  const [registered, setRegistered] = React.useState(0);
  const [scanned, setScanned] = React.useState(0);

  const getLocals = React.useCallback(async () => {
    try {
      const res = await getLocalClients();
      setRegistered(res);
    } catch (err) {
      console.error(err);
    }
  }, []);

  React.useEffect(() => {
    getLocals();
  }, []);

  return (
    <View style={globalStyles.grid}>
      <MacroCard
        label="Registered"
        value="0"
        goal={registered ? registered.toString() : "0"}
        color="#6bcb77"
      />
      <MacroCard label="Scanned" value="0" goal="150" color="#4ecdc4" />
      <MacroCard label="Manual" value="0" goal="250" color="#ffd93d" />
      <MacroCard label="Rejected" value="0" goal="20" color="#ff6b6b" />
    </View>
  );
}
