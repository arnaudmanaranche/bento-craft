import { useEditCell } from '@/hooks/useEditCell'
import { useBentoStore } from '@/store'
import * as ContextMenu from '@radix-ui/react-context-menu'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import type { BaseSyntheticEvent } from 'react'
import { useMemo } from 'react'
import ColorPicker from 'react-pick-color'

export interface CellProps {
  rowIndex: number
  columnIndex: number
  size: number[]
  className: string
}

export function Cell({
  rowIndex,
  columnIndex,
  size,
  className: initialClassName,
}: CellProps) {
  const selectedCells = useBentoStore((state) => state.selectedCells)
  const setSelectCell = useBentoStore((state) => state.setSelectCell)
  const unSetSelectCell = useBentoStore((state) => state.unSetSelectCell)
  const { editCell } = useEditCell()

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
    isSelected ? 'border-2 bg-stripes-purple' : '',
    'rounded-lg min-h-40 flex items-center justify-center bg-[#E9E9E9] cursor-pointer text-[#1D1D1D]',
    'dark:text-white dark:bg-[#1D1D1D]'
  )

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div
          key={[rowIndex, columnIndex].toString()}
          className={className}
          style={{
            backgroundColor: isSelected ? '' : initialClassName,
          }}
          data-row-index={rowIndex}
          data-col-index={columnIndex}
          onClick={(event: BaseSyntheticEvent) => {
            if (isSelected) {
              const index = selectedCells.findIndex(
                (cell) => cell[0] === rowIndex && cell[1] === columnIndex
              )

              if (index > -1) {
                unSetSelectCell(index)
              }
            } else {
              setSelectCell([
                parseInt(
                  event.target.attributes.getNamedItem('data-row-index')
                    ?.value as string,
                  10
                ),
                parseInt(
                  event.target.attributes.getNamedItem('data-col-index')
                    ?.value as string,
                  10
                ),
              ])
            }
          }}
        >
          <span data-selected={isSelected}>
            Cell {[rowIndex, columnIndex].toString()}
          </span>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="min-w-[220px] overflow-hidden rounded-md bg-white p-2 shadow-xl">
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger className="relative flex h-[25px] items-center pl-[25px] text-sm outline-none">
              Change background color
              <ChevronRightIcon className="ml-auto" />
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent sideOffset={20} alignOffset={-5}>
                <ContextMenu.Item className="outline-none">
                  <ColorPicker
                    onChange={(e) => {
                      editCell({
                        rowIndex,
                        columnIndex,
                        backgroundColor: e.hex,
                      })
                    }}
                  />
                </ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  )
}
