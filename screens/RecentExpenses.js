// import { useContext } from "react";
import { Text } from "react-native";

// import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
// import { getDateMinusDays } from "../utils/date";
// import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses() {
  // const expensesCtx = useContext(ExpensesContext);

  // const recentExpenses = expensesCtx.expenses.filter((expense) => {
  //   const today = new Date();
  //   const sevenDaysAgoDate = getDateMinusDays(today, 7);

  //   return expense.date >= sevenDaysAgoDate && expense.date <= today;
  // });

  return <Text>RecentExpenses Screen</Text>;
}

export default RecentExpenses;
