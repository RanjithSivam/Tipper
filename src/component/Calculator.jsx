import InputProvider from './InputProvider';
import OutputDisplayer from './OutputDisplayer';

export default function Calculator() {
  return (
    <div className="bg-white rounded-3xl p-6 flex flex-col items-stretch justify-between gap-4 w-full desktop:w-1/2 desktop:flex-row">
      <InputProvider />
      <OutputDisplayer />
    </div>
  );
}
