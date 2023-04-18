import ExpensesProvider from "./context/ExpensesProvider";
import Expenses from "./components/Expenses/Expenses";
import ExpenseAdd from "./components/ExpenseAdd/ExpenseAdd";

function App() {
  return (
    <div>
      <div className="width-200">
        <ExpensesProvider>
          <h1>Expense Tracker</h1>
          <ExpenseAdd />
          <Expenses />
        </ExpensesProvider>
      </div>
    </div>
  );
}

export default App;
