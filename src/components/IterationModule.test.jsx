import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import IterationModule from './IterationModule'

describe('IterationModule', () => {
  const defaultProps = {
    data: { title: 'Test Title', selection: 'short' },
    index: 0,
    onRemove: vi.fn(),
    onChange: vi.fn()
  }

  it('should render the module correctly', () => {
    render(<IterationModule {...defaultProps} />)

    expect(screen.getByTestId('iteration-module-0')).toBeInTheDocument()
    expect(screen.getByText('EM-1')).toBeInTheDocument()
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Selection')).toBeInTheDocument()
  })

  it('should toggle the module when clicked', () => {
    render(<IterationModule {...defaultProps} />)

    expect(screen.queryByText('Short')).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId('iteration-module-0'))
    expect(screen.getByText('Short')).toBeInTheDocument()
    expect(screen.getByText('Medium Length')).toBeInTheDocument()
    expect(
      screen.getByText('VERY VERY VERY LONG (UP TO 35 CHAR)')
    ).toBeInTheDocument()
  })

  it('should update the selection and call the onChange function', () => {
    render(<IterationModule {...defaultProps} />)

    fireEvent.click(screen.getByTestId('iteration-module-0'))
    fireEvent.click(screen.getByText('Medium Length'))
    expect(screen.getByText('Medium Length')).toHaveClass(
      'border-green-600 text-green-600'
    )
    fireEvent.click(screen.getByText('Done'))
    expect(defaultProps.onChange).toHaveBeenCalledWith({
      title: 'Test Title',
      selection: 'medium'
    })
  })

  it('should call the onRemove function when the Remove button is clicked', () => {
    render(<IterationModule {...defaultProps} />)

    fireEvent.click(screen.getByTestId('iteration-module-0'))
    fireEvent.click(screen.getByText('Remove'))
    expect(defaultProps.onRemove).toHaveBeenCalled()
  })
})
