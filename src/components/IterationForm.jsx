const IterationForm = ({ value, onChange, index }) => {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex flex-1 flex-row bg-white py-2 px-4 rounded-md'>
        <span className='w-20'>EM-{index + 1}</span>
        <input
          className='flex flex-1 outline-none'
          placeholder='Adding iteration'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <div className='mt-4 bg-white py-2 px-4'>
        To add a new iteration, start typing a prompt or{' '}
        <span className='underline'>generate</span> one
      </div>
    </div>
  )
}

export default IterationForm
