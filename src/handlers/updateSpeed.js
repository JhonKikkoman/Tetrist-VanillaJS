/** @format */

import { player } from '../constants.js';

const speed = document.getElementById('speed');

// функция обновления скорости
export function updateSpeed() {
  speed.innerText = 'Speed : ' + player.speed;
}
