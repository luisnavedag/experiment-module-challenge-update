import { useMemo, useState } from 'react'
import Button from './Button'
import IterationForm from './IterationForm'
import IterationModule from './IterationModule'
import AddIcon from './icons/AddIcon'
import LockIcon from './icons/LockIcon'
import LockOpenIcon from './icons/LockOpenIcon'
import classNames from 'classnames'

const ExperimentModule = () => {
  const [open, setOpen] = useState(false)
  const [openForm, setOpenForm] = useState(false)

  const [status, setStatus] = useState('unlocked')

  const [iterations, setIterations] = useState([])
  const [newTitle, setNewTitle] = useState('')

  const iterationList = useMemo(() => {
    return iterations.map((item, index) => (
      <IterationModule
        data={item}
        key={index}
        index={index}
        onRemove={() => {
          setIterations((iterations) => [
            ...iterations.slice(0, index),
            ...iterations.slice(index + 1)
          ])
        }}
        onChange={(v) => {
          setIterations((iterations) => [
            ...iterations.slice(0, index),
            v,
            ...iterations.slice(index + 1)
          ])
        }}
      />
    ))
  }, [iterations, setIterations])

  return (
    <div className='border rounded-md p-4 flex flex-col w-full bg-gray-50'>
      <div className={classNames('flex flex-row flex-1 items-center justify-between', { 'opacity-50': status === 'locked' })} onClick={() => setOpen(!open && !(status === 'locked'))}>
        <h1 className='text-xl font-bold'>Experiment Module</h1>
        <div>
          {status === 'locked' ? <LockIcon /> : <LockOpenIcon />}
        </div>
      </div>

      {open && (
        <>
          <div className='mt-4 space-y-2'>
            {iterationList}

            {(openForm ||
              iterations.length === 0) && (
                <IterationForm
                  index={iterations.length}
                  value={newTitle}
                  onChange={(value) => setNewTitle(value)}
                />
            )}
          </div>

          <div className='flex flex-row flex-1 justify-end mt-4'>
            {(openForm || iterations.length === 0)
              ? (
                <>
                  <Button
                    onClick={() => {
                      setNewTitle('')
                      setOpenForm(false)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    highlight
                    onClick={() => {
                      setIterations((iterations) => [
                        ...iterations,
                        { title: newTitle }
                      ])
                      setNewTitle('')
                      setOpenForm(false)
                    }}
                  >
                    Done
                  </Button>
                </>
                )
              : (
                <>
                  <Button onClick={() => {
                    setStatus('locked')
                    setOpen(false)
                  }}
                  >Lock
                  </Button>
                  <Button onClick={() => setIterations([])}>Reset</Button>
                  <Button highlight onClick={() => setOpenForm(true)} className='flex flex-row items-center'>
                    <AddIcon />
                    Add Iteration
                  </Button>
                </>
                )}
          </div>
        </>
      )}
    </div>
  )
}

export default ExperimentModule
