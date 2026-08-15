import HomeHeader from "@/components/home-header";
import MacroGrid from "@/components/macro-grid";
import ResentRecords from "@/components/resent-records";
import { clientSyncService } from "@/services/client";
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
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const init = async () => {
      try {
        await clientSyncService();
      } catch (err) {
        setError(err as Error);
        console.error('Client sync failed:', err);
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, []);

  if (isLoading) {
    return (
      <View style={globalStyles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    // Optionally show an error screen with a retry button
    return (
      <View style={globalStyles.center}>
        <Text>Something went wrong {error.message}</Text>
      </View>
    );
  }

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
        <MacroGrid />
        {/* <ResentRecords />  */}
      </View>
    </ScrollView>
  );
}
