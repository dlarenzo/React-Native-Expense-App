import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ intervalName, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.intervalText}>{intervalName}</Text>
      <Text style={styles.sumText}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 13,
    backgroundColor: GlobalStyles.colors.darkBlue,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  intervalText: {
    fontSize: 15,
    color: "white",
  },
  sumText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default ExpensesSummary;
