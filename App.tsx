import { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button } from "./src/components/Button";

export default function App() {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber(number + 1);
  }
  function handleDecrement() {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      Alert.alert("Não é permitido número negativo");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{number}</Text>
      <Button color="#3dcf33" title="Incrementar" onPress={handleIncrement} />
      <Button title="Decrementar" color="#b34b29" onPress={handleDecrement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
  },
});
