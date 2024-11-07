import { View, Pressable, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.darkBlue,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  flatText: {
    color: GlobalStyles.colors.darkBlue,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.blue,
    borderRadius: 4,
  },
});

export default Button;
