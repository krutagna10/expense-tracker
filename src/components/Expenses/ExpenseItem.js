import { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // Use state is one of the react hooks (They should be called inside the component function)

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated Title');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate
                date={props.date}
            />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button className="expense-item__btn" onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;