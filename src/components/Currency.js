import React, { useContext, useState } from 'react';
import { AppContext} from '../context/AppContext';

const CurrencyDropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('pound'); // Initial selection
    const { dispatch } = useContext(AppContext);

    const currencies = [
        {
            'option': '$ Dolar',
            'value': 'dolar'
        },
        {
            'option': '£ Pound',
            'value': 'pound'
        },
        {
            'option': '€ Euro',
            'value': 'euro'
        },
        {
            'option': '₹ Ruppee',
            'value': 'ruppee'
        }
    ];
    const handleChange = (event) => {
        setSelectedCurrency({option: event.target.options[event.target.selectedIndex].text,value: event.target.value});
        console.log(event.target);
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.options[event.target.selectedIndex].text.split(" ")[0]});
    };

    const dropdownStyles = {
        backgroundColor: '#93e499',
        color: '#f6fbee',
        borderRadius: '5px',
        fontSize: '16px',
    };

    const optionStyles = {
        backgroundColor: '#93e499',
        color: 'black',
        fontSize: '16px',
    };

    const selectedOptionStyles = {
        backgroundColor: '#93e499',
        color: 'black',
        fontSize: '16px',
    };

    return (
        <div className='alert alert-secondary' style={{marginBottom: '0px'}}>
            <select
                className="currency-dropdown"
                value={selectedCurrency.value}
                onChange={handleChange}
                style={dropdownStyles}
            >
                {currencies.map((currency) => (
                    <option key={currency.value} value={currency.value} style={selectedCurrency.value === currency.value ? selectedOptionStyles : optionStyles}>
                        {currency.option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyDropdown;