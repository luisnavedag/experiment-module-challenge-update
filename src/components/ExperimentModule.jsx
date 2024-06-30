import { useMemo, useState } from 'react'
import Button from './Button'
import IterationForm from './IterationForm'
import IterationModule from './IterationModule'

const ExperimentModule = () => {
  const [open, setOpen] = useState(false)

  const [iterations, setIterations] = useState([])
  const [newTitle, setNewTitle] = useState('')

  const [openForm, setOpenForm] = useState(false)

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
      <div className='flex flex-row flex-1' onClick={() => setOpen(!open)}>
        <h1 className='text-xl font-bold'>Experiment Module</h1>
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
                  <Button>Lock</Button>
                  <Button highlight onClick={() => setOpenForm(true)}>
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
