import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import { Client, getClients } from "@/storage/async-storage";
import { globalStyles } from "@/styles/global";
import { clientSyncService } from "@/services/client";
import Card from "@/components/client-card";

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
      await clientSyncService().then(() => loadClients());
      // setClients(synced);
    } catch (err) {
      console.error("Sync failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={globalStyles.containerFluid}>
      <View style={{ paddingHorizontal: 16 }}>
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

      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        {clients.length === 0 ? (
          <Text>No records found.</Text>
        ) : (
          clients.map((client) => (
            <Card
              key={client.id}
              id={client.id}
              fullName={client.fullName}
              contactNo={client.contactNo}
              division={client.division}
              isAttended={client.isAttended!}
              timestamp={client.timestamp}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}
