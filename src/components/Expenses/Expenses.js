import {useState} from 'react';
import Card from '../UI/Card.js';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const dropdownOnChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selectedYear={filteredYear}
                    onChangeDropdown={dropdownOnChangeHandler}
                />
                <ExpensesChart
                    expenses={filteredExpenses}
                />
                <ExpenseList
                    expenses={filteredExpenses}
                />
            </Card>
        </div>
    )
}

export default Expenses;