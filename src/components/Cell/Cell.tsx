import { useBentoStore } from '@/store'
import clsx from 'clsx'
import { useMemo } from 'react'

export interface CellProps {
  rowIndex: number
  columnIndex: number
  size: number[]
}

export function Cell({ rowIndex, columnIndex, size }: CellProps) {
  const selectedCells = useBentoStore((state) => state.selectedCells)
  const setSelectCell = useBentoStore((state) => state.setSelectCell)
  const unSetSelectCell = useBentoStore((state) => state.unSetSelectCell)

  const isSelected = useMemo(() => {
    return selectedCells.find(
      (cell) => cell[0] === rowIndex && cell[1] === columnIndex
    )
  }, [columnIndex, rowIndex, selectedCells])

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
      data-row-index={rowIndex}
      data-col-index={columnIndex}
      onClick={(event) => {
        if (isSelected) {
          const index = selectedCells.findIndex(
            (cell) => cell[0] === rowIndex && cell[1] === columnIndex
          )

          if (index > -1) {
            unSetSelectCell(index)
          }
        } else {
          const element = event.target as HTMLInputElement

          setSelectCell([
            parseInt(
              element.attributes.getNamedItem('data-row-index')
                ?.value as string,
              10
            ),
            parseInt(
              element.attributes.getNamedItem('data-col-index')
                ?.value as string,
              10
            ),
          ])
        }
      }}
    >
      <span
        data-row-index={rowIndex}
        data-col-index={columnIndex}
        data-selected={isSelected}
      >
        Cell {[rowIndex, columnIndex].toString()}
      </span>
    </div>
  )
}
