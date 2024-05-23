import { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

function MyComponent({ colNumber }: { colNumber: number }) {
  return (
    <div
      className={`grid grid-cols-${colNumber} gap-4 bg-purple-300 text-black`}
    >
      <div className="col-span-4">01</div>
      <div className="col-span-4">02</div>
      <div className="col-span-2">03</div>
      <div className="col-span-2">04</div>
      <div className="col-span-2">05</div>
      <div className="col-span-2">06</div>
      <div className="col-span-3">07</div>
      <div className="col-span-2">08</div>
      <div className="col-span-3">09</div>
    </div>
  );
}

function componentToString(colNumber: number) {
  return renderToStaticMarkup(<MyComponent colNumber={colNumber} />);
}

const Home = () => {
  const [colNumber, setColNumber] = useState(8);

  return (
    <div>
      <div className="p-6">
        <code>{componentToString(colNumber)}</code>
      </div>
      <hr />
      <MyComponent colNumber={colNumber} />
      <hr />
      <button
        onClick={() => {
          setColNumber(4);
        }}
        className="bg-white text-black p-2"
      >
        Change col number
      </button>
    </div>
  );
};

export default Home;
