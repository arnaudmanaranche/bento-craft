/**
 *
 * This file contains code copied from another source.
 *
 * Original Author: https://github.com/jean1591
 * Source File: https://github.com/jean1591/bento-generator/blob/main/src/utils/bentoGenerator.ts
 *
 */

import {
  canCreateColSpan3,
  canCreateRowSpan3,
  isBlockAvailable,
  isLargerThan,
  isLastColumn,
  isLastRow,
  shouldSkipBlock,
} from './gridGenerator.helpers'
import type { Grid, GridCell } from './gridGenerator.interface'
import { BASE_BLOCK } from './gridGenerator.interface'

const RANDOM_THRESHOLD_SPAN2 = 0.85
const RANDOM_THRESHOLD_SPAN3 = 0.9

export interface GridLength {
  colNumber: number
  rowNumber: number
  template?: Grid
}

function generateEmptyGrid({ colNumber, rowNumber }: GridLength): Grid {
  const grid: Grid = []

  for (let rowIndex = 0; rowIndex < rowNumber; rowIndex++) {
    const row: GridCell[] = []

    for (let columnIndex = 0; columnIndex < colNumber; columnIndex++) {
      row.push({ value: BASE_BLOCK, className: '' })
    }

    grid.push(row)
  }

  return grid
}

export function generateRandomGrid({
  colNumber,
  rowNumber,
  template,
}: GridLength): Grid {
  if (template) return template

  const emptyGrid = generateEmptyGrid({ colNumber, rowNumber })

  for (let rowIndex = 0; rowIndex < rowNumber; rowIndex++) {
    for (let columnIndex = 0; columnIndex < colNumber; columnIndex++) {
      if (shouldSkipBlock(emptyGrid, rowIndex, columnIndex)) {
        continue
      }

      const row = emptyGrid[rowIndex]
      const randomNumber = Math.random()

      if (isLargerThan(randomNumber, RANDOM_THRESHOLD_SPAN3)) {
        if (canCreateColSpan3(emptyGrid, columnIndex, rowIndex)) {
          emptyGrid[rowIndex][columnIndex] = { value: [3, 1], className: '' }
          emptyGrid[rowIndex][columnIndex + 1] = {
            value: [0, 0],
            className: '',
          }
          emptyGrid[rowIndex][columnIndex + 2] = {
            value: [0, 0],
            className: '',
          }
        } else if (canCreateRowSpan3(emptyGrid, columnIndex, rowIndex)) {
          emptyGrid[rowIndex][columnIndex] = { value: [1, 3], className: '' }
          emptyGrid[rowIndex + 1][columnIndex] = {
            value: [0, 0],
            className: '',
          }
          emptyGrid[rowIndex + 2][columnIndex] = {
            value: [0, 0],
            className: '',
          }
        }
      } else if (isLargerThan(randomNumber, RANDOM_THRESHOLD_SPAN2)) {
        if (
          !isLastColumn(columnIndex, row.length) &&
          isBlockAvailable(emptyGrid, columnIndex + 1, rowIndex) &&
          !isLastRow(rowIndex, emptyGrid.length)
        ) {
          emptyGrid[rowIndex][columnIndex] = { value: [2, 2], className: '' }
          emptyGrid[rowIndex][columnIndex + 1] = {
            value: [0, 0],
            className: '',
          }
          emptyGrid[rowIndex + 1][columnIndex] = {
            value: [0, 0],
            className: '',
          }
          emptyGrid[rowIndex + 1][columnIndex + 1] = {
            value: [0, 0],
            className: '',
          }
        } else if (
          !isLastColumn(columnIndex, row.length) &&
          isBlockAvailable(emptyGrid, columnIndex + 1, rowIndex)
        ) {
          emptyGrid[rowIndex][columnIndex] = { value: [2, 1], className: '' }
          emptyGrid[rowIndex][columnIndex + 1] = {
            value: [0, 0],
            className: '',
          }
        } else if (!isLastRow(rowIndex, emptyGrid.length)) {
          emptyGrid[rowIndex][columnIndex] = { value: [1, 2], className: '' }
          emptyGrid[rowIndex + 1][columnIndex] = {
            value: [0, 0],
            className: '',
          }
        }
      }
    }
  }

  return emptyGrid
}
