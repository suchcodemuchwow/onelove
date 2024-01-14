import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style={"auto"} />
      <Text testID={"welcome"}>Hello World! 👋</Text>
    </View>
  );
}
