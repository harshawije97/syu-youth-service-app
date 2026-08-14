import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef, useCallback } from "react";
import { colors, globalStyles } from "@/styles/global";
import { useScanStore } from "@/zustand/scan-store";
import { router } from "expo-router";

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  const scanned = useScanStore((state) => state.scanned);
  const setScanned = useScanStore((state) => state.setScanned);

  const lockRef = useRef(false);

  useEffect(() => {
    if (!scanned) {
      lockRef.current = false;
    }
  }, [scanned]);

  const handleBarcodeScanned = useCallback(
    ({ data, type }: { data: string; type: string }) => {
      if (lockRef.current) return;
      lockRef.current = true;

      setScanned(data);
      router.push("/scan-success");
    },
    [setScanned],
  );

  // Permissions are still loading
  if (!permission) {
    return <View style={globalStyles.center} />;
  }

  // If the permission is not granted
  if (!permission.granted) {
    return (
      <View style={globalStyles.center}>
        <Text
          style={{
            color: colors.textSecondary,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          We need your permission to use the camera to scan QR codes.
        </Text>
        <Pressable onPress={requestPermission} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
      />
    </View>
  );
}
