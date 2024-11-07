import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig }) {
  const inputStyles = [styles.textInput];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.multiline);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 15,
    color: GlobalStyles.colors.darkBlue,
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.beige,
    color: GlobalStyles.colors.darkBlue,
    padding: 10,
    borderRadius: 6,
    fontSize: 15,
  },
  multiline: {
    minHeight: 70,
    textAlignVertical: "top",
  },
});

export default Input;
