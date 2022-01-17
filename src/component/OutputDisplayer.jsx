import React, { useContext } from 'react';
import { TipContext } from '../context/TipPercentContext';

export default function OutputDisplayer() {
  const { state, dispatch } = useContext(TipContext);
  return (
    <div className="bg-dark-cyan p-6 rounded-xl flex flex-col justify-between gap-16 w-full">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex justify-between gap-8">
          <p className="flex flex-col text-light-gray-cyan1 font-bold capitalize text-sm gap-1">
            tip amount
            <small className="font-light text-xs lowercase dark-gray-cyan1">
              / person
            </small>
          </p>
          <div className="flex items-center text-xl desktop:text-4xl">
            <img
              src="./images/icon-dollar.svg"
              alt=""
              className="mr-2 w-3 desktop:w-4"
            />
            <p className="font-bold text-strong-cyan">
              {parseFloat(
                state.bill *
                  (state.percent === 'custom'
                    ? state.custom / 100
                    : state.percent / 100)
              ).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <p className="flex flex-col text-light-gray-cyan1 font-bold capitalize text-base gap-1">
            total
            <small className="font-light text-xs lowercase dark-gray-cyan1">
              / person
            </small>
          </p>
          <div className="flex items-center text-xl desktop:text-4xl">
            <img
              src="./images/icon-dollar.svg"
              alt=""
              className="mr-2 w-3 desktop:w-4"
            />
            <p className="inline font-bold text-strong-cyan">
              {parseFloat(
                (state.bill *
                  (state.percent === 'custom'
                    ? state.custom / 100
                    : state.percent / 100)) /
                  (!state.people ? 1 : state.people)
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <button
        className="bg-strong-cyan uppercase px-2 py-1 text-dark-cyan font-bold rounded active:bg-light-gray-cyan1 hover:bg-light-gray-cyan1"
        onClick={() => dispatch({ type: 'reset' })}
      >
        reset
      </button>
    </div>
  );
}
