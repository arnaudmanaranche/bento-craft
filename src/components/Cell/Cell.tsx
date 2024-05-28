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
    isSelected ? 'bg-red-500' : '',
    'border rounded-lg min-h-20 flex items-center justify-center bg-slate-200 cursor-pointer'
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
