import { useState } from "react";
import Button from "./Button";
import IterationForm from "./IterationForm";

const ExperimentModule = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-md p-4 flex flex-col w-full bg-gray-50">
      <div className="flex flex-row flex-1" onClick={() => setOpen(!open)}>
        <h1 className="text-xl font-bold">Experiment Module</h1>
      </div>

      {open && (
        <>
          <div className="mt-4">
            <IterationForm />
          </div>

          <div className="flex flex-row flex-1 justify-end mt-4">
            <Button>Lock</Button>
            <Button highlight={true}>Add Iteration</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperimentModule;
