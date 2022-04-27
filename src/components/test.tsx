import { useState } from "react";

const Counter = ({ counter }: any) => {
  return <span>{counter}</span>;
};

const RandomList = ({ count }: any) => {
  const generateNumbers: any = () => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
  };

  console.log("generateNumbers", generateNumbers);

  return (
    <ul>
      {generateNumbers.map((item: any) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export const ParentComponent = () => {
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Инкрементировать
      </button>
      <Counter counter={counter} />
      <RandomList count={counter} />
    </div>
  );
};
