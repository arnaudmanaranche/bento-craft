import clsx from 'clsx'
import { useState } from 'react'

export interface CellProps {
  rowIndex: number
  columnIndex: number
  size: number[]
}

export function Cell({ rowIndex, columnIndex, size }: CellProps) {
  const [isSelected, setSelected] = useState(false)

  const className = clsx(
    // size[0] is column span
    size[0] === 3 ? 'col-span-3' : '',
    size[0] === 2 ? 'col-span-2' : '',
    // size[1] is row span
    size[1] === 3 ? 'row-span-3' : '',
    size[1] === 2 ? 'row-span-2' : '',
    isSelected ? 'border-2 border-[#1D1D1D] dark:border-[#E9E9E9]' : '',
    'rounded-lg min-h-20 flex items-center justify-center bg-[#E9E9E9] cursor-pointer text-[#1D1D1D]',
    'dark:text-white dark:bg-[#1D1D1D]'
  )

  return (
    <div
      key={[rowIndex, columnIndex].toString()}
      className={className}
      onClick={() => {
        setSelected((prevCheck) => !prevCheck)
      }}
    >
      <span>Cell {[rowIndex, columnIndex].toString()}</span>
    </div>
  )
}
