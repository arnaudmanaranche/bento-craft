import { create } from 'zustand'
import { getRandomEvenNumber } from './utils/getRandomEvenNumber'
import { getRandomNumberFromInterval } from './utils/getRandomNumberFromInterval'
import { generateRandomGrid } from './utils/gridGenerator/gridGenerator'
import type { Grid } from './utils/gridGenerator/gridGenerator.interface'

export interface BentoState {
  bento: Grid
  columnNumber: number
  gap: number
  rowNumber: number
  setBento: ({
    columnNumber,
    rowNumber,
    gap,
  }: {
    columnNumber?: number
    rowNumber?: number
    gap?: number
  }) => void
  setColumnNumber: (value: number) => void
  setGap: (value: number) => void
  setRowNumber: (value: number) => void
}

export const useBentoStore = create<BentoState>()((set) => ({
  columnNumber: 6,
  rowNumber: 5,
  setBento: () =>
    set(() => {
      const col = getRandomNumberFromInterval(3, 8)
      const row = getRandomNumberFromInterval(3, 8)
      const gap = getRandomEvenNumber()

      return {
        bento: generateRandomGrid({
          colNumber: col,
          rowNumber: row,
        }),
        rowNumber: row,
        columnNumber: col,
        gap,
      }
    }),
  setColumnNumber: (columnNumber) =>
    set((state) => ({
      columnNumber,
      bento: generateRandomGrid({
        colNumber: state.columnNumber,
        rowNumber: state.rowNumber,
      }),
    })),
  setRowNumber: (rowNumber) =>
    set((state) => ({
      rowNumber,
      bento: generateRandomGrid({
        colNumber: state.columnNumber,
        rowNumber: state.rowNumber,
      }),
    })),
  bento: [],
  gap: 4,
  setGap: (gap) =>
    set(() => ({
      gap,
    })),
}))
