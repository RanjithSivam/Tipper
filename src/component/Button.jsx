import { useState, useRef } from 'react';

export default function Button({
  value,
  custom,
  percent,
  setPercent,
  setCustom,
}) {
  const [active, setActive] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    let input = event.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      if (input && input != 0) {
        if (input.substring(0, 1) == '0') {
          input = input.substring(1);
        }
        setCustom(input);
      } else {
        setCustom('');
      }
    }
  };

  if (value === 'custom' && active && percent === value) {
    return (
      <input
        className=" bg-transparent text-dark-cyan font-bold w-full text-lg outline-0 text-right border-strong-cyan border-2 rounded p-1"
        onChange={handleChange}
        value={custom}
        ref={inputRef}
        placeholder="0"
      />
    );
  }
  return (
    <button
      className={`${
        value === 'custom'
          ? 'bg-light-gray-cyan2 text-dark-cyan'
          : `active:bg-strong-cyan active:text-dark-cyan ${
              percent === value
                ? 'text-dark-cyan bg-strong-cyan'
                : 'text-light-gray-cyan2 bg-dark-cyan'
            }`
      } font-bold p-2 rounded capitalize border-2 border-transparent`}
      onClick={() => {
        if (value === 'custom') {
          setActive(true);
          setTimeout(() => {
            inputRef.current.focus();
          }, 200);
        }
        setPercent(value);
      }}
    >
      {value}
      {value === 'custom' ? '' : '%'}
    </button>
  );
}
