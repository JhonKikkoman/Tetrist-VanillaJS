/** @format */

import { player, arena } from '../constants.js';
import { scoreMultiplier } from './scoreMultiplier.js';

// функция схлопывания заполнего ряда на поле и удаляет его из arena
export function arenaSweep() {
  let collapsedRows = 0;
  outer: for (let y = arena.length - 1; y > 0; --y) {
    for (let x = 0; x < arena[y].length; ++x) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }
    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    ++y;
    player.collapseCount += 1;
    collapsedRows++;
  }
  scoreMultiplier(collapsedRows);
}
