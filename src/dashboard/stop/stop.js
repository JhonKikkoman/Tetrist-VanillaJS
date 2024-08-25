/** @format */

import { player, arena } from '../../constants.js';
import { draw, playerReset } from '../../../index.js';
import { collide } from '../../utils/collide.js';
import { merge } from '../../display/managingPieces.js';
import { arenaSweep } from '../../utils/arenaSweep.js';
import { updateScore } from '../../handlers/updateScore.js';
import { updateCollapse } from '../../handlers/updateCollapse.js';
import { speedMultiplier } from '../../utils/speedMultiplier.js';

// время одного тика анимации
let dropCounter = 0;
// верхняя граница продолжительности анимации , при достижении dropInterval скидываем dropCounter в 0
let dropInterval = 1000;
// замеряет время в мс
let lastTime = 0;
let isFalsy = false;

const btnStop = document.getElementById('stop');

//обработчик клика на кнопке stop, меняет состояние кнопки и реализует stop/resume
btnStop.addEventListener('click', () => {
  if (!isFalsy) {
    btnStop.innerText = 'Resume';
    isFalsy = true;
  } else {
    btnStop.innerText = 'Stop';
    isFalsy = false;
    update();
  }
});

// функция управления анимацией(requestAnimationFrame) тетриса
export function update(time = 0) {
  const deltaTime = time - lastTime;
  dropCounter += deltaTime;
  // чем меньше интервал(dropInterval), тем быстрее будет анимация
  if (dropCounter > dropInterval) {
    playerDrop();
  }
  lastTime = time;
  draw();
  if (!isFalsy) {
    // сообщаем браузеру что хотим выполнить анимацию
    // предоставляем функцию обратного вызова перед перерисовыванием
    window.requestAnimationFrame(update);
  } else {
    return;
  }
}

// функция для конопки ArrowDown (скинуть вниз фигуру)
// отвечат за движение фигуры по полю(вниз)
// отвечает за обновление  состояния игрока
export function playerDrop() {
  // двигает фигуру игрока на 1 по оси y(player.pos.y++)
  player.pos.y++;
  //проверка коснулась ли фигура игрока границ поля
  if (collide(arena, player)) {
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updateScore();
    updateCollapse();
  }
  if (player.collapseCount < 10) {
    // скидываем dropCounter в 0 для перезапуска анимации в функции update()
    dropCounter = 0;
  } else {
    // ускоряем движение фигуры через вызов функции и переопределения dropCounter
    const currentSpeed = speedMultiplier();
    dropCounter = currentSpeed;
  }
}
