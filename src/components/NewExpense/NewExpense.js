import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: `e${props.expenses.length + 1}`,
        };

        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDateHandler}
                    onCancel={stopEditingHandler}
                    onAdd={startEditingHandler}
                />
            )}

        </div>
    );
};

export default NewExpense;