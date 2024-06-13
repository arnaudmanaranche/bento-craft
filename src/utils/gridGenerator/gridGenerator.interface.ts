/**
 *
 * This file contains code copied from another source.
 *
 * Original Author: https://github.com/jean1591
 * Source File: https://github.com/jean1591/bento-generator/blob/main/src/utils/interface/bento.ts
 *
 */

export const BASE_BLOCK: [number, number] = [1, 1]

export type GridCell = {
  value: [number, number]
  className: string
}

export type Grid = GridCell[][]
