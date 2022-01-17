import React, { useState, useContext } from 'react';
import Button from './Button';
import Input from './Input';
import { TipContext } from '../context/TipPercentContext';

export default function InputProvider() {
  const [focus1, setFocus1] = useState(false);
  const [focus2, setFocus2] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  // const [percent, setPercent] = useState(null);
  // const [custom, setCustom] = useState(0);

  const { state, dispatch } = useContext(TipContext);

  const setBill = (bill) => {
    dispatch({ type: 'set bill', payload: bill });
  };

  const setPeople = (people) => {
    dispatch({ type: 'set people', payload: people });
  };

  const setPercent = (percent) => {
    dispatch({ type: 'set percent', payload: percent });
  };

  const setCustom = (custom) => {
    dispatch({ type: 'set custom', payload: custom });
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex gap-2 flex-col">
        <p className="text-dark-gray-cyan1 font-bold text-xs capitalize flex justify-between">
          <small>Bill</small>
          {error1 ? <small className="text-error">Can't be zero</small> : <></>}
        </p>
        <div
          className={`border-2 flex justify-between items-center bg-light-gray-cyan2 p-1.5 rounded gap-1 ${
            focus1
              ? 'border-strong-cyan'
              : `${error1 ? 'border-error' : 'border-transparent'}`
          }`}
        >
          <img src="./images/icon-dollar.svg" alt="" className="" />
          <Input
            focus={setFocus1}
            error={setError1}
            dispatch={setBill}
            value={state.bill}
          />
        </div>
      </div>

      <div className="flex gap-2 flex-col">
        <p className="text-dark-gray-cyan1 font-bold text-xs capitalize text-xs">
          select tip %
        </p>
        <div className="grid grid-cols-2 gap-2 desktop:grid-cols-3">
          {[
            {
              value: 5,
            },
            {
              value: 10,
            },
            {
              value: 15,
            },
            {
              value: 25,
            },
            {
              value: 50,
            },
          ].map((ele) => (
            <Button
              key={ele.value}
              value={ele.value}
              percent={state.percent}
              setPercent={setPercent}
            />
          ))}
          <Button
            value="custom"
            custom={state.custom}
            percent={state.percent}
            setPercent={setPercent}
            setCustom={setCustom}
          />
        </div>
      </div>

      <div className="flex gap-2 flex-col">
        <p className="text-dark-gray-cyan1 font-bold text-xs capitalize flex justify-between">
          <small>number of people</small>
          {error2 ? <small className="text-error">Can't be zero</small> : <></>}
        </p>
        <div
          className={`border-2 flex justify-between items-center bg-light-gray-cyan2 p-1.5 rounded gap-1 ${
            focus2
              ? 'border-strong-cyan'
              : `${error2 ? 'border-error' : 'border-transparent'}`
          }`}
        >
          <img src="./images/icon-person.svg" alt="" />
          <Input
            focus={setFocus2}
            error={setError2}
            dispatch={setPeople}
            value={state.people}
          />
        </div>
      </div>
    </div>
  );
}
