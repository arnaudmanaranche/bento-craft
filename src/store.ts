import { create } from 'zustand'
import { generateRandomGrid } from './utils/gridGenerator/gridGenerator'
import type { Grid } from './utils/gridGenerator/gridGenerator.interface'

interface InitialBentoState {
  columnNumber: number
  gap: number
  rowNumber: number
}

export interface BentoState extends InitialBentoState {
  bento: Grid
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

export const useBentoStore = create<BentoState>()((set) => {
  const DEFAULT_PROPS: InitialBentoState = {
    rowNumber: 4,
    gap: 4,
    columnNumber: 4,
  }

  return {
    ...DEFAULT_PROPS,
    setBento: () =>
      set(() => {
        // const col = getRandomNumberFromInterval(3, 8)
        // const row = getRandomNumberFromInterval(3, 8)
        // const gap = getRandomEvenNumber()

        return {
          bento: generateRandomGrid({
            colNumber: DEFAULT_PROPS.columnNumber,
            rowNumber: DEFAULT_PROPS.rowNumber,
          }),
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

    setGap: (gap) =>
      set(() => ({
        gap,
      })),
  }
})
