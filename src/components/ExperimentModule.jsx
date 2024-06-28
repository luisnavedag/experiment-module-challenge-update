import { useState } from "react";
import Button from "./Button";

const ExperimentModule = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-md p-4 flex flex-col w-full">
      <div className="flex flex-row flex-1" onClick={() => setOpen(!open)}>
        <h1>Experiment Module</h1>
      </div>

      {open && (
        <>
          <div className="mt-2">This is content</div>
          <div className="flex flex-row flex-1 justify-end">
            <Button>Lock</Button>
            <Button highlight={true}>Add Iteration</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperimentModule;
