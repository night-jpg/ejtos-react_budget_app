import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><img onClick={event=> increaseAllocation(props.name)} src="plus.png" alt="plus-icon"></img></td>
        <td><img onClick={handleDeleteExpense} src="minus.png" alt="minus-icon"></img></td>
        </tr>
    );
};

export default ExpenseItem;
