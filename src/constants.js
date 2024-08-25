/** @format */

import { createMatrix } from './utils/createMatrix.js';

// состояние игрока
export const player = {
  // текущие состояние позиции игрока, где x,y оси
  pos: { x: 0, y: 0 },
  // matrix - текущая фигура игрока
  matrix: null,
  score: 0,
  collapseCount: 0,
  speed: 1,
};

// игровое поле тетриса(в аргументах передаётся размер поля)
// инициация начального состояние поля тетриса
export const arena = createMatrix(12, 20);

// цвета фигур
export const colors = [
  null,
  '#ff0d72',
  '#0dc2ff',
  '#0dff72',
  '#f538ff',
  '#ff8e0d',
  '#ffe138',
  '#3877ff',
];
