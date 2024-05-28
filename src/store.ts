import { create } from 'zustand'
import { generateRandomGrid } from './utils/gridGenerator/gridGenerator'
import type { Grid } from './utils/gridGenerator/gridGenerator.interface'

export interface BentoState {
  bento: Grid
  columnNumber: number
  gap: number
  isFormLocked: boolean
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
  setColumnNumber: (columnNumber: number) => void
  setGap: (gap: number) => void
  lockForm: (value: boolean) => void
  setRowNumber: (rowNumber: number) => void
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomEvenNumber() {
  const evenNumbers = [2, 4, 6, 8]
  const randomIndex = Math.floor(Math.random() * evenNumbers.length)
  return evenNumbers[randomIndex]
}

export const useBentoStore = create<BentoState>()((set) => ({
  isFormLocked: false,
  lockForm: (isFormLocked) =>
    set(() => ({
      isFormLocked,
    })),
  columnNumber: 6,
  rowNumber: 5,
  setBento: () =>
    set((state) => {
      if (state.isFormLocked) {
        return {
          bento: generateRandomGrid({
            colNumber: state.columnNumber,
            rowNumber: state.rowNumber,
          }),
        }
      }
      const col = randomIntFromInterval(3, 8)
      const row = randomIntFromInterval(3, 8)
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
