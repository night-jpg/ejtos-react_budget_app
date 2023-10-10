import React, { useContext, useState } from 'react';
import { AppContext} from '../context/AppContext';


const Budget = () => {
    const { budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { dispatch } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        
        dispatch({ type: 'SET_BUDGET', payload: event.target.value });
        setNewBudget(budget);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
