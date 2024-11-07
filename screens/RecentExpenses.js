import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgoDate = getDateMinusDays(today, 7);

    return expense.date >= sevenDaysAgoDate && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expenseInterval="Last 7 Days"
      fallbackText={"No expenses in the last 7 days."}
    />
  );
}

export default RecentExpenses;
