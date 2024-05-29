import { useBentoStore } from '@/store'
import { generateRandomGrid } from '@/utils/gridGenerator/gridGenerator'

export function useMergeCells() {
  const bento = useBentoStore((state) => state.bento)
  const setBento = useBentoStore((state) => state.setBento)
  const selectedCells = useBentoStore((state) => state.selectedCells)
  const unSetAllSelectCells = useBentoStore(
    (state) => state.unSetAllSelectCells
  )

  function mergeCells() {
    const copiedBento = [...bento]

    const positions = selectedCells.map((values) => ({
      rowIndex: values[0],
      colIndex: values[1],
    }))

    const minRowIndex = Math.min(...positions.map((pos) => pos.rowIndex))
    let maxRowIndex = Math.max(...positions.map((pos) => pos.rowIndex))
    const minColIndex = Math.min(...positions.map((pos) => pos.colIndex))
    let maxColIndex = Math.max(...positions.map((pos) => pos.colIndex))

    // Calculate the required rowspan and colspan
    positions.forEach((pos) => {
      const cell = copiedBento[pos.rowIndex][pos.colIndex]
      const cellRowSpan = cell[1]
      const cellColSpan = cell[0]

      if (cellRowSpan + pos.rowIndex > maxRowIndex + 1) {
        maxRowIndex = cellRowSpan + pos.rowIndex - 1
      }
      if (cellColSpan + pos.colIndex > maxColIndex + 1) {
        maxColIndex = cellColSpan + pos.colIndex - 1
      }
    })

    const finalRowSpan = maxRowIndex - minRowIndex + 1
    const finalColSpan = maxColIndex - minColIndex + 1

    copiedBento[minRowIndex][minColIndex] = [finalColSpan, finalRowSpan]
    for (let rowIndex = minRowIndex; rowIndex <= maxRowIndex; rowIndex++) {
      for (let colIndex = minColIndex; colIndex <= maxColIndex; colIndex++) {
        if (rowIndex !== minRowIndex || colIndex !== minColIndex) {
          copiedBento[rowIndex][colIndex] = [0, 0]
        }
      }
    }

    const table = generateRandomGrid({
      colNumber: 0,
      rowNumber: 0,
      template: copiedBento,
    })

    setBento({ columnNumber: 0, rowNumber: 0, template: table })
    unSetAllSelectCells()
  }

  return {
    mergeCells,
  }
}
