import { View, Text, Pressable } from "react-native";
import React from "react";
import { useScanStore } from "@/zustand/scan-store";
import { router } from "expo-router";
import { globalStyles } from "@/styles/global";

export default function ScanSuccessScreen() {
  const scannedData = useScanStore((state) => state.scannedData);
  const resetScanned = useScanStore((state) => state.resetScanned);

  const handleGoBack = () => {
    resetScanned();
    // No over lapping. Gurenteed redirect to the parent screen
    router.replace("/scan");
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>
          User Verified Successfully
        </Text>
        {scannedData ? (
          <Text style={globalStyles.subtitle}>{scannedData}</Text>
        ) : null}
      </View>
      <Pressable onPress={handleGoBack} style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Go back</Text>
      </Pressable>
    </View>
  );
}
