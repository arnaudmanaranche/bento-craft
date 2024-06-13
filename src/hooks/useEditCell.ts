import { useBentoStore } from '@/store'
import type { Grid } from '@/utils/gridGenerator/gridGenerator.interface'

export interface EditCellProps {
  rowIndex: number
  columnIndex: number
  backgroundColor: string
}

export function useEditCell() {
  const bento = useBentoStore((state) => state.bento)
  const setBento = useBentoStore((state) => state.setBento)

  function editCell({ rowIndex, columnIndex, backgroundColor }: EditCellProps) {
    const copiedBento: Grid = JSON.parse(JSON.stringify(bento))

    copiedBento[rowIndex][columnIndex].className = backgroundColor

    setBento({ columnNumber: 0, rowNumber: 0, template: copiedBento })
  }

  return {
    editCell,
  }
}
