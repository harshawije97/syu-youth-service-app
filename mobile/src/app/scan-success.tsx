import { View, Text, Pressable } from "react-native";
import React from "react";
import { useScanStore } from "@/zustand/scan-store";
import { router } from "expo-router";
import { globalStyles } from "@/styles/global";
import { ScanData } from "@/lib/types";
import { IconCircleCheck } from "@tabler/icons-react-native";
import DetailedRow from "@/components/detailed-row";

export default function ScanSuccessScreen() {
  const scannedData = useScanStore((state) => state.scannedData);
  const resetScanned = useScanStore((state) => state.resetScanned);

  const [data, setData] = React.useState<ScanData | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleGoBack = () => {
    resetScanned();
    // No over lapping. Gurenteed redirect to the parent screen
    router.replace("/scan");
  };

  React.useEffect(() => {
    const parseData = JSON.parse(scannedData!);
    console.log("Scanned data:", parseData);
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <View style={globalStyles.iconCircle}>
          <IconCircleCheck size={64} color="#fff" strokeWidth={2.2} />
        </View>

        <Text style={globalStyles.title}>Scan Successful!</Text>
        <Text style={globalStyles.name}>Full Name</Text>

        <View style={globalStyles.divider} />

        <View style={globalStyles.detailsBlock}>
          <DetailedRow label="Full Name" value={"John Doe"} />
          <DetailedRow label="Mobile Number" value={"+1234567890"} />
          <DetailedRow label="Date of Birth" value={"01/01/2000"} />
        </View>

        <View style={globalStyles.badge}>
          <Text style={globalStyles.badgeText}>Attendance Recorded</Text>
        </View>
        <View style={{ width: "100%", alignItems: "center", marginTop: 24 }}>
          <Pressable onPress={handleGoBack} style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
