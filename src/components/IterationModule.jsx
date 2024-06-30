import { useState } from 'react'
import Button from './Button'
import classNames from 'classnames'

const IterationModule = ({ data, index, onRemove, onChange }) => {
  const [open, setOpen] = useState(false)

  const [selection, setSelection] = useState(data.selection)

  return (
    <div className='flex w-full flex-col bg-white'>
      <div
        className='flex flex-1 flex-row bg-white py-2 px-4 rounded-md'
        onClick={() => setOpen(!open)}
      >
        <span className='w-20'>EM-{index + 1}</span>
        <span>{data.title}</span>
      </div>

      {open && (
        <div className='ml-20 px-4 py-4'>
          <div>
            <Button
              className={classNames('border border-gray-600 rounded-md m-1', {
                'border-green-600 text-green-600': selection === 'short'
              })}
              onClick={() => setSelection('short')}
            >
              Short
            </Button>
            <Button
              className={classNames('border border-gray-600 rounded-md m-1', {
                'border-green-600 text-green-600': selection === 'medium'
              })}
              onClick={() => setSelection('medium')}
            >
              Medium Length
            </Button>
            <Button
              className={classNames('border border-gray-600 rounded-md m-1', {
                'border-green-600 text-green-600': selection === 'long'
              })}
              onClick={() => setSelection('long')}
            >
              VERY VERY VERY LONG (UP TO 35 CHAR)
            </Button>
          </div>

          <hr className='mt-2' />

          <div className='flex flex-row flex-1 justify-end mt-4'>
            <Button onClick={onRemove}>Remove</Button>
            <Button
              highlight
              onClick={() => {
                onChange({ ...data, selection })
                setOpen(false)
              }}
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default IterationModule
