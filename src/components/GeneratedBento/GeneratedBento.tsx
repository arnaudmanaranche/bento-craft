import { useBentoStore } from '@/store'
import type { Grid } from '@/utils/gridGenerator/gridGenerator.interface'
import type { ReactNode } from 'react'
import { Cell } from '../Cell/Cell'

export interface GeneratedBentoProps {
  bento: Grid
}

export function GeneratedBento({ bento }: GeneratedBentoProps): ReactNode {
  const columnNumber = useBentoStore((state) => state.columnNumber)
  const gap = useBentoStore((state) => state.gap)

  return (
    <div className={`grid grid-cols-${columnNumber} gap-${gap}`} id="bento">
      {bento.map((row, rowIndex) =>
        row.map((size, columnIndex) =>
          size.value[0] !== 0 && size.value[1] !== 0 ? (
            <Cell
              key={[rowIndex, columnIndex].toString()}
              size={size.value}
              columnIndex={columnIndex}
              rowIndex={rowIndex}
              className={size.className}
            />
          ) : null
        )
      )}
    </div>
  )
}
