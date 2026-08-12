import { StyleSheet } from "react-native";

export const colors = {
  primary: "#bf2f2d",
  mute: "#000000",
  background: "#F0F2F5",
  header: "#4a4c4d",
  text: "#000000",
  surface: "#474c4e",
  textSecondary: "#6b6375",
  alert: "#ff0000",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: 30,
  },
  flexBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexChild: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  card: {
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    padding: 16,
    width: "47%",
    borderLeftWidth: 4,
  },
  label: {
    fontSize: 14,
    color: "#052f4a",
  },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1447e6",
    marginTop: 4,
  },
  goal: {
    fontSize: 14,
    color: "#1447e6",
    marginTop: 2,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
  macros: {
    fontSize: 13,
    color: "#6b6375",
    marginTop: 4,
  },
});
