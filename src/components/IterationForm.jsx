const IterationForm = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-1 flex-row bg-white py-2 px-4 rounded-md">
        <span className="w-20">EM</span>
        <input className="w-full outline-none" placeholder="Adding iteration" />
      </div>

      <div className="mt-4 bg-white py-2 px-4">
        To add a new iteration, start typing a prompt or{" "}
        <span className="underline">generate</span> one
      </div>
    </div>
  );
};

export default IterationForm;
