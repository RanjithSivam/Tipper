import React from 'react';

export default function Input({ focus, error, value, dispatch }) {
  const handleChange = (event) => {
    let input = event.target.value;
    error(false);
    if (/^\d*\.?\d*$/.test(input)) {
      if (input && input != 0) {
        if (input.substring(0, 1) == '0') {
          input = input.substring(1);
        }
        dispatch(input);
      } else {
        dispatch('');
        error(true);
      }
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="bg-transparent text-dark-cyan font-bold w-full text-lg outline-0 text-right"
      onFocus={() => focus(true)}
      onBlur={() => focus(false)}
      placeholder="0"
    />
  );
}
