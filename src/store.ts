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
    template,
  }: {
    columnNumber?: number
    rowNumber?: number
    gap?: number
    template?: Grid
  }) => void
  setColumnNumber: (value: number) => void
  setGap: (value: number) => void
  setRowNumber: (value: number) => void
  setSelectCell: (value: [number, number]) => void
  unSetSelectCell: (index: number) => void
  unSetAllSelectCells: () => void
  selectedCells: Array<[number, number]>
}

export const useBentoStore = create<BentoState>()((set) => {
  const DEFAULT_PROPS: InitialBentoState = {
    rowNumber: 4,
    gap: 4,
    columnNumber: 4,
  }

  return {
    ...DEFAULT_PROPS,
    setBento: (element) =>
      set((state) => {
        if (element.template) {
          return {
            bento: generateRandomGrid({
              colNumber: state.columnNumber,
              rowNumber: state.rowNumber,
              template: element.template,
            }),
          }
        }

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
    // Merge properties
    selectedCells: [],
    setSelectCell: (element) => {
      set((state) => {
        return {
          selectedCells: [...state.selectedCells, element],
        }
      })
    },
    unSetAllSelectCells: () => {
      set(() => {
        return {
          selectedCells: [],
        }
      })
    },
    unSetSelectCell: (index) => {
      set((state) => {
        const copy = state.selectedCells

        copy.splice(index, 1)

        return {
          selectedCells: [...copy],
        }
      })
    },
  }
})
