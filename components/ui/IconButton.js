import { Pressable, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import Ionicons from "react-native-vector-icons/Ionicons";

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Add Expense
          <Ionicons name={icon} size={size} color={color} />
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: "white",
  },
});

export default IconButton;
