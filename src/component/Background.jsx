import Calculator from './Calculator';

export default function Backgrounds() {
  return (
    <div className="bg-light-gray-cyan1 min-h-screen flex justify-center items-center flex-col gap-16">
      <h1
        className="uppercase text-dark-cyan font-semibold text-xl mt-4"
        style={{ letterSpacing: '0.5rem' }}
      >
        <p>spli</p>
        <p>tter</p>
      </h1>
      <Calculator />
    </div>
  );
}
