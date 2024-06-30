import { useState } from 'react'
import Button from './Button'
import ExperimentModule from './ExperimentModule'

const ExperimentPanel = () => {
  const [experiments, setExperiments] = useState([])

  return (
    <div className='space-y-2'>
      <Button
        onClick={() => setExperiments((experiments) => [...experiments, {}])}
      >
        Add Expermient
      </Button>
      {experiments.map((expermient, index) => (
        <ExperimentModule
          key={index}
          data={expermient}
          onChange={(v) =>
            setExperiments((experiments) => [
              ...experiments.splice(0, index),
              v,
              ...experiments.slice(index + 1)
            ])}
        />
      ))}
    </div>
  )
}

export default ExperimentPanel
