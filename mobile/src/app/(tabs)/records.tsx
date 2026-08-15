import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import { Client, getClients, RegisteredClients } from "@/storage/async-storage";
import { globalStyles } from "@/styles/global";
import { clientSyncService } from "@/services/client";
import Card, { ClientCardRegistered } from "@/components/client-card";
import { getAllUsers } from "@/lib/api";

export default function RecordsScreen() {
  const [clients, setClients] = React.useState<RegisteredClients[]>([]);
  const [loading, setLoading] = React.useState(false);

  const setHandleAsync = async () => {
    // loading = true;
    setLoading(true);
    // load clients into the state
    try {
      const {data: synced} = await getAllUsers();
      setClients(synced);
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
            <Text style={globalStyles.buttonText}>Sync Scanned Records</Text>
          )}
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
        {clients.length === 0 ? (
          <Text>No records found.</Text>
        ) : (
          clients.map((client) => (
            <ClientCardRegistered key={client.id} {...client} />
          ))
        )}
      </ScrollView>
    </View>
  );
}
