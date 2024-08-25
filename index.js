/** @format */
'use strict';
import { startGame } from './src/dashboard/startGame.js';
import { player, colors, arena } from './src/constants.js';
import { createPiece } from './src/utils/piecesSignature.js';
import { updateScore } from './src/handlers/updateScore.js';
import { updateCollapse } from './src/handlers/updateCollapse.js';
import { collide } from './src/utils/collide.js';

export const canvas = document.getElementById('tetris');
export const context = canvas.getContext('2d');
context.scale(20, 20);
context.shadowColor = '#d53';
context.shadowBlur = 3;

// отрисовка конструкции(фигура или поле)  по заданному типу
export function drawMatrix(matrix, offset) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

// функция отрисовки фигур на поле
export function draw() {
  // отрисовка цвета фона поля
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // рисует и запоминает положение фигуры на поле
  drawMatrix(arena, { x: 0, y: 0 });
  // рисует на игровом поле текущую фигуру игрока(текущий ход)
  drawMatrix(player.matrix, player.pos);
}

// функция для обновления фигуры тетриса(т.е. фигура начинает сверху поля тетриса)
export function playerReset() {
  const pieces = 'TJLOSZI';
  // получить тип фигуры тетриса и прокинуть в матрицу игрока
  player.matrix = createPiece(pieces[(pieces.length * Math.random()) | 0]);
  player.pos.y = 0;
  // вычесление средины поля по оси x
  player.pos.x =
    ((arena[0].length / 2) | 0) - ((player.matrix[0].length / 2) | 0);
  // проверяем коснулась ли фигура верхней границы поля, если да, обновляем состояние поля чере fill(0)
  if (collide(arena, player)) {
    arena.forEach((row) => row.fill(0));
    player.score = 0;
    player.collapseCount = 0;
    updateScore();
    updateCollapse();
  }
}

startGame();
