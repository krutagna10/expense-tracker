import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: `e${props.expenses.length + 1}`,
        };

        props.onAddExpense(expenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm
                onSaveExpenseData={saveExpenseDateHandler}
            />
        </div>
    );
};

export default NewExpense;