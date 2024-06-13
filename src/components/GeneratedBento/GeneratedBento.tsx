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
          size[0] !== 0 && size[1] !== 0 ? (
            <Cell
              key={[rowIndex, columnIndex].toString()}
              size={size}
              columnIndex={columnIndex}
              rowIndex={rowIndex}
            />
          ) : null
        )
      )}
    </div>
  )
}
