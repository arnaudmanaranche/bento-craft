/**
 * This file contains code copied from another source.
 *
 * Original Author: https://github.com/jean1591
 * Source File: https://github.com/jean1591/bento-generator/blob/main/src/utils/helpers.ts
 *
 */

import type { Grid } from './gridGenerator.interface'
import { BASE_BLOCK } from './gridGenerator.interface'

export const isLastColumn = (columnIndex: number, rowLength: number) =>
  columnIndex === rowLength - 1

export const isLastRow = (rowIndex: number, bentoLength: number) =>
  rowIndex === bentoLength - 1

export const shouldSkipBlock = (
  bento: Grid,
  rowIndex: number,
  columnIndex: number
) =>
  bento[rowIndex][columnIndex][0] === 0 && bento[rowIndex][columnIndex][1] === 0

export const isBlockAvailable = (
  bento: Grid,
  columIndex: number,
  rowIndex: number
) => bento[rowIndex][columIndex] === BASE_BLOCK

export const isLargerThan = (randomNumber: number, threshold: number) =>
  randomNumber > threshold

export const canCreateColSpan3 = (
  bento: Grid,
  columIndex: number,
  rowIndex: number
) => {
  return (
    columIndex < bento[rowIndex].length - 2 &&
    isBlockAvailable(bento, columIndex + 1, rowIndex) &&
    isBlockAvailable(bento, columIndex + 2, rowIndex)
  )
}

export const canCreateRowSpan3 = (
  bento: Grid,
  columIndex: number,
  rowIndex: number
) => {
  return (
    rowIndex < bento.length - 2 &&
    isBlockAvailable(bento, columIndex, rowIndex + 1) &&
    isBlockAvailable(bento, columIndex, rowIndex + 2)
  )
}
