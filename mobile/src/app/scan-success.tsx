import { View, Text, Pressable } from "react-native";
import React from "react";
import { useScanStore } from "@/zustand/scan-store";
import { router } from "expo-router";
import { globalStyles } from "@/styles/global";
import { ScanData } from "@/lib/types";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react-native";
import DetailedRow from "@/components/detailed-row";
import { saveAttendance } from "@/lib/api";
import { checkDataType } from "@/services/client";

type DataProps = {
  id: string;
  fullName: string;
  contactNo: string;
};

export default function ScanSuccessScreen() {
  const scannedData = useScanStore((state) => state.scannedData);
  const resetScanned = useScanStore((state) => state.resetScanned);

  const [data, setData] = React.useState<any | string>("Loading...");
  const [error, setError] = React.useState<string | null>(null);

  const handleGoBack = () => {
    resetScanned();
    // No over lapping. Gurenteed redirect to the parent screen
    router.replace("/scan");
  };

  React.useEffect(() => {
    const validateQR = checkDataType(scannedData!);

    if (typeof validateQR === "string") {
      setError(validateQR);
      console.error(validateQR);
      return;
    }

    const parseData = JSON.parse(scannedData!);

    saveAttendance(parseData)
      .then((res) => {
        if (res.success) setData(parseData);
      })
      .catch((err) => err);
  }, []);

  if (error) {
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          <View style={globalStyles.iconCircle}>
            <IconCircleX size={64} color="#fff" strokeWidth={2.2} />
          </View>

          <Text style={globalStyles.title}>Scan Failed</Text>
          <Text style={globalStyles.name}>{error}</Text>

          <View style={{ width: "100%", alignItems: "center", marginTop: 24 }}>
            <Pressable onPress={handleGoBack} style={globalStyles.button}>
              <Text style={globalStyles.buttonText}>Go Back</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <View style={globalStyles.iconCircle}>
          <IconCircleCheck size={64} color="#fff" strokeWidth={2.2} />
        </View>

        <Text style={globalStyles.title}>Scan Successful!</Text>
        <Text style={globalStyles.name}>
          {data.name === "" ? "Loading..." : data.name}
        </Text>

        <View style={globalStyles.divider} />

        <View style={globalStyles.detailsBlock}>
          {data !== "Loading..." && (
            <>
              <DetailedRow label="ID" value={data.id || ""} />
              <DetailedRow label="Full Name" value={data.name || ""} />
              <DetailedRow label="Mobile Number" value={data.contact || ""} />
            </>
          )}
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
