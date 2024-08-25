/** @format */

import { player, arena } from '../constants.js';
import { collide } from '../utils/collide.js';
import { playerDrop } from '../dashboard/stop/stop.js';

// функция поворота фигуры(pieces) matrix - массив из pieces , dir - число
function rotate(matrix, dir) {
  for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
      [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    }
  }
  if (dir > 0) {
    matrix.forEach((row) => row.reverse());
  } else {
    matrix.reverse();
  }
}

// действие игрока (поворот фигуры по нажатию клавиши 'd'),  где dir = -1 или 1
function playerRotate(dir) {
  // положение фигуры игрока по оси x
  const pos = player.pos.x;
  let offset = 1;
  // описаваем как будет поварачиваться фигуры при помощи функции rotate
  rotate(player.matrix, dir);
  // проверка коснулась ли фигура края поля(arena)
  while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix, -dir);
      player.pos.x = pos;
      return;
    }
  }
}

// движение фугуры(pieces) в зависмости от offset, цифра(где -1(движение влево от центра, 1 движение вправо от центра))
function playerMove(offset) {
  player.pos.x += offset;
  if (collide(arena, player)) {
    player.pos.x -= offset;
  }
}

export function merge(arena, player) {
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        arena[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}

// обработчик управления фигурами(pieces)
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    playerMove(-1);
  } else if (event.key === 'ArrowRight') {
    playerMove(1);
  } else if (event.key === 'ArrowDown') {
    playerDrop();
  } else if (event.key === 'd') {
    playerRotate(-1);
  } else if (event.key === 'd') {
    playerRotate(1);
  }
});
