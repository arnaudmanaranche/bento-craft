import { useBentoStore } from "@/store";

import clsx from "clsx";
import { MouseEvent, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

function Cell({ className }: { className: string }) {
  const [isSelected, setSelected] = useState(false);
  const add = useBentoStore((state) => state.add);
  const remove = useBentoStore((state) => state.remove);
  const selectedElements = useBentoStore((state) => state.selectedElements);

  function handleOnClick(e: MouseEvent<HTMLElement>) {
    setSelected(!isSelected);
    if (!isSelected) {
      add(e.target);
    } else {
      remove(e.target);
    }
    if (selectedElements.length === 1) {
      console.log("2 elements");
    }
  }

  return (
    <div
      onClick={handleOnClick}
      className={clsx(
        "justify-center items-center flex p-2 rounded-2xl bg-slate-200 cursor-pointer",
        isSelected && "border-2 border-slate-500",
        className
      )}
    >
      Cell
    </div>
  );
}

function MyComponent({
  colNumber,
  rawNumber,
  gap,
  gridFlow,
}: {
  colNumber: number;
  rawNumber: number;
  gap: number;
  gridFlow: "col" | "row";
}) {
  return (
    <div
      id="toto"
      className={`grid gap-${gap} p-4 grid-rows-${rawNumber} grid-cols-${colNumber} grid-flow-row-dense`}
    >
      <Cell className="col-span-2 row-span-2" />
      <Cell className="col-span-1 row-span-2" />
      <Cell className="col-span-4 row-span-1" />
      <Cell className="col-span-3 row-span-4" />
      <Cell className="col-span-1 row-span-2" />
      <Cell className="col-span-3 col-start-1 row-span-2" />
      <Cell className="col-span-4 col-start-4 row-span-7" />
      <Cell className="col-span-1 col-start-11 row-span-2" />
      <Cell className="col-span-1 col-start-1 row-span-2" />
      <Cell className="col-span-1 col-start-1 row-span-2" />
      <Cell className="col-span-1 col-start-1 row-span-2" />
      <Cell className="col-span-4 col-start-8 row-span-2" />
      <Cell className="col-span-2 col-start-8 row-span-2" />
      <Cell className="col-span-2 col-start-10 row-span-2" />
      <Cell className="col-span-2 col-start-2 row-span-4" />
      <Cell className="col-span-2 col-start-2 row-span-2" />
      <Cell className="col-span-4 col-start-4 row-span-2" />
      <Cell className="col-span-4 col-start-8 row-span-2" />
    </div>
  );
}

function componentToString(
  colNumber: number,
  rawNumber: number,
  gap: number,
  gridFlow: "col" | "row"
) {
  return renderToStaticMarkup(
    <MyComponent
      gap={gap}
      rawNumber={rawNumber}
      colNumber={colNumber}
      gridFlow={gridFlow}
    />
  );
}

const Home = () => {
  const [colNumber, setColNumber] = useState(4);
  const [rawNumber, setRawNumber] = useState(4);
  const [gapNumber, setGapNumber] = useState(4);
  const [gridFlow, setGridFlow] = useState<"col" | "row">("row");

  return (
    <div className="flex flex-col">
      <div className="flex flex-grow">
        <form className="border-r-2 flex flex-col p-10">
          <div className="flex space-x-2 mb-4">
            <div>
              <input
                type="radio"
                id="column"
                name="column"
                value="column"
                onClick={() => {
                  setGridFlow("col");
                }}
                checked={gridFlow === "col"}
              />
              <label htmlFor="column">column</label>
            </div>
            <div>
              <input
                type="radio"
                id="row"
                name="row"
                value="row"
                onClick={() => {
                  setGridFlow("row");
                }}
                checked={gridFlow === "row"}
              />
              <label htmlFor="row">row</label>
            </div>
          </div>

          <label htmlFor="columns">Columns</label>
          <input
            min={2}
            max={8}
            id="columns"
            type="range"
            onChange={(e) => setColNumber(e.target.value)}
          />
          <label htmlFor="raws">Row</label>
          <input
            min={2}
            max={8}
            id="raws"
            disabled={gridFlow === "row"}
            type="range"
            onChange={(e) => setRawNumber(e.target.value)}
          />
          <label htmlFor="gap">Gap</label>
          <input
            min={2}
            max={8}
            id="gap"
            type="range"
            onChange={(e) => setGapNumber(e.target.value)}
          />
        </form>
        <div className="flex-1" id="container">
          <MyComponent
            gap={gapNumber}
            colNumber={colNumber}
            rawNumber={rawNumber}
            gridFlow={gridFlow}
          />
        </div>
      </div>
      <code>
        {componentToString(colNumber, rawNumber, gapNumber, gridFlow)}
      </code>
    </div>
  );
};

export default Home;
