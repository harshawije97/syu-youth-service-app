import HomeHeader from "@/components/home-header";
import { colors, globalStyles } from "@/styles/global";
import { IconCamera, IconFileSpreadsheet } from "@tabler/icons-react-native";
import { Link } from "expo-router";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to QR Attend</Text>
      <HomeHeader />
      <View style={globalStyles.flexBox}>
        <Link
          href="/scan"
          style={{
            fontSize: 20,
            color: "#007bff",
          }}
        >
          <View style={globalStyles.flexChild}>
            <IconCamera color={colors.textSecondary} />
            <Text style={{ fontSize: 16 }}>Scan QR Code</Text>
          </View>
        </Link>
        <Link
          href="/records"
          style={{
            fontSize: 18,
            color: "#007bff",
          }}
        >
          <IconFileSpreadsheet color={colors.surface} />
          View All Records
        </Link>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        {/* <ResentRecords />  */}
      </View>
    </ScrollView>
  );
}
