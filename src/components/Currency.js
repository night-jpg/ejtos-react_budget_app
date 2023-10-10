import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("Currency($ Dolar)"); // Initial selection with label
  const { dispatch } = useContext(AppContext);

  const currencies = [
    {
      'option': '$ Dolar',
      'value': '$'
    },
    {
      'option': '£ Pound',
      'value': '£'
    },
    {
      'option': '€ Euro',
      'value': '€'
    },
    {
      'option': '₹ Ruppee',
      'value': '₹'
    }
  ];

  const handleButtonClick = (currency) => {
    setSelectedCurrency(`Currency(${currency.option})`);
    setIsDropdownOpen(false);
    dispatch({ type: 'CHG_CURRENCY', payload: currency.value });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownStyles = {
    backgroundColor: '#93e499',
    color: '#f6fbee',
    borderRadius: '5px',
    fontSize: '16px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    cursor: 'pointer'
  };

  const optionsListStyles = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    position: 'absolute',
    backgroundColor: '#93e499',
    borderRadius: '5px',
    border: '1px solid #28682d', // Added border
    width: '100%',
    zIndex: '1',
    display: isDropdownOpen ? 'block' : 'none'
  };

  const optionStyles = {
    backgroundColor: '#93e499',
    color: 'black',
    fontSize: '16px',
    padding: '5px',
    cursor: 'pointer'
  };

  return (
    <div className='alert alert-secondary' style={{ marginBottom: '0px' }}>
      <div
        className="currency-dropdown"
        onClick={toggleDropdown}
        style={dropdownStyles}
      >
        {selectedCurrency}
      </div>
      <ul style={optionsListStyles}>
        {currencies.map((currency) => (
          <li
            key={currency.value}
            onClick={() => handleButtonClick(currency)}
            style={selectedCurrency === `Currency(${currency.option})` ? { ...optionStyles, backgroundColor: '#f6fbee' } : optionStyles}
          >
            {currency.option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyDropdown;
