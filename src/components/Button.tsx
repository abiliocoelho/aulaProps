import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: color ? color : "#7159c1",
        },
      ]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: "90%",
    backgroundColor: "#7159c1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    borderRadius: 6,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
