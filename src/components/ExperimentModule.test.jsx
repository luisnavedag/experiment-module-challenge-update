import { render, fireEvent } from '@testing-library/react'
import { expect, test, vi, describe } from 'vitest'
import ExperimentModule from './ExperimentModule'

test('ExperimentModule', () => {
  describe('should lock the module when the Lock button is clicked', () => {
    const onChange = vi.fn()
    const { getByText } = render(
      <ExperimentModule data={{}} onChange={onChange} />
    )

    fireEvent.click(getByText('Lock'))

    expect(onChange).toHaveBeenCalledWith({ iterations: [], status: 'locked' })
  })

  describe('should unlock the module when the module is clicked', () => {
    const onChange = vi.fn()
    const { getByText } = render(
      <ExperimentModule data={{ status: 'locked' }} onChange={onChange} />
    )

    fireEvent.click(getByText('Experiment Module'))

    expect(onChange).not.toHaveBeenCalled()
  })

  describe('should reset the iterations when the Reset button is clicked', () => {
    const onChange = vi.fn()
    const { getByText } = render(
      <ExperimentModule
        data={{ iterations: [{ title: 'Test Iteration' }] }}
        onChange={onChange}
      />
    )

    fireEvent.click(getByText('Reset'))

    expect(onChange).toHaveBeenCalledWith({
      iterations: [],
      status: 'unlocked'
    })
  })

  describe('should not allow adding iterations when the module is locked', () => {
    const onChange = vi.fn()
    const { getByText } = render(
      <ExperimentModule data={{ status: 'locked' }} onChange={onChange} />
    )

    fireEvent.click(getByText('Add Iteration'))

    expect(onChange).not.toHaveBeenCalled()
  })

  describe('should allow adding iterations when the module is unlocked', () => {
    const onChange = vi.fn()
    const { getByText } = render(
      <ExperimentModule data={{}} onChange={onChange} />
    )

    fireEvent.click(getByText('Add Iteration'))
    fireEvent.change(getByText('Iteration Title'), {
      target: { value: 'New Iteration' }
    })
    fireEvent.click(getByText('Done'))

    expect(onChange).toHaveBeenCalledWith({
      iterations: [{ title: 'New Iteration' }],
      status: 'unlocked'
    })
  })
})
