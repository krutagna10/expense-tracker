import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // Use state is one of the react hooks (They should be called inside the component function)

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate
                    date={props.date}
                />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;