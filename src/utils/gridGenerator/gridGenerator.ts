/**
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
import { BASE_BLOCK } from './gridGenerator.interface'

const RANDOM_THRESHOLD_SPAN2 = 0.85
const RANDOM_THRESHOLD_SPAN3 = 0.9

function generateEmptyGrid({
  colNumber,
  rowNumber,
}: {
  colNumber: number
  rowNumber: number
}) {
  const bento = []

  for (let rowIndex = 0; rowIndex < rowNumber; rowIndex++) {
    const row: number[][] = []

    for (let columnIndex = 0; columnIndex < colNumber; columnIndex++) {
      row.push(BASE_BLOCK)
    }

    bento.push(row)
  }

  return bento
}

export function generateRandomGrid({
  colNumber,
  rowNumber,
}: {
  colNumber: number
  rowNumber: number
}) {
  const emptyGrid = generateEmptyGrid({ colNumber, rowNumber })

  for (let rowIndex = 0; rowIndex < rowNumber; rowIndex++) {
    for (let columnIndex = 0; columnIndex < colNumber; columnIndex++) {
      if (shouldSkipBlock(emptyGrid, rowIndex, columnIndex)) {
        continue
      }

      const row = emptyGrid[rowIndex]

      const randomNumber = Math.random()

      if (isLargerThan(randomNumber, RANDOM_THRESHOLD_SPAN3)) {
        // span-3
        if (canCreateColSpan3(emptyGrid, columnIndex, rowIndex)) {
          // Merge three blocks horizontaly
          emptyGrid[rowIndex][columnIndex] = [3, 1]
          emptyGrid[rowIndex][columnIndex + 1] = [0, 0]
          emptyGrid[rowIndex][columnIndex + 2] = [0, 0]
        } else if (canCreateRowSpan3(emptyGrid, columnIndex, rowIndex)) {
          // Merge three blocks verticaly
          emptyGrid[rowIndex][columnIndex] = [1, 3]
          emptyGrid[rowIndex + 1][columnIndex] = [0, 0]
          emptyGrid[rowIndex + 2][columnIndex] = [0, 0]
        }
      } else if (isLargerThan(randomNumber, RANDOM_THRESHOLD_SPAN2)) {
        // span-2

        if (
          !isLastColumn(columnIndex, row.length) &&
          isBlockAvailable(emptyGrid, columnIndex + 1, rowIndex) &&
          !isLastRow(rowIndex, emptyGrid.length)
        ) {
          // Merge two blocks horizontaly and verticaly
          emptyGrid[rowIndex][columnIndex] = [2, 2]
          emptyGrid[rowIndex][columnIndex + 1] = [0, 0]
          emptyGrid[rowIndex + 1][columnIndex] = [0, 0]
          emptyGrid[rowIndex + 1][columnIndex + 1] = [0, 0]
        } else if (
          !isLastColumn(columnIndex, row.length) &&
          isBlockAvailable(emptyGrid, columnIndex + 1, rowIndex)
        ) {
          // Merge two blocks horizontaly
          emptyGrid[rowIndex][columnIndex] = [2, 1]
          emptyGrid[rowIndex][columnIndex + 1] = [0, 0]
        } else if (!isLastRow(rowIndex, emptyGrid.length)) {
          // Merge two blocks verticaly
          emptyGrid[rowIndex][columnIndex] = [1, 2]
          emptyGrid[rowIndex + 1][columnIndex] = [0, 0]
        }
      }
    }
  }

  return emptyGrid
}
