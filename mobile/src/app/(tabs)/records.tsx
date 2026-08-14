import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React from "react";
import { Client, getClients } from "@/storage/async-storage";
import { globalStyles } from "@/styles/global";
import { clientSyncService } from "@/services/client";

export default function RecordsScreen() {
  const [clients, setClients] = React.useState<Client[]>([]);
  const [loading, setLoading] = React.useState(false);

  const loadClients = React.useCallback(async () => {
    const data = await getClients();
    setClients(data);
  }, []);

  React.useEffect(() => {
    loadClients();
  }, [loadClients]);

  const setHandleAsync = async () => {
    // loading = true;
    setLoading(true);
    // load clients into the state
    try {
      await clientSyncService();
      // setClients(synced);
    } catch (err) {
      console.error("Sync failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Pressable
        onPress={setHandleAsync}
        style={globalStyles.button}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={globalStyles.buttonText}>Sync pre-registrations</Text>
        )}
      </Pressable>
    </View>
  );
}
