/** @format */

import { player } from '../constants.js';

const score = document.getElementById('score');

// функция обновления очков
export function updateScore() {
  score.innerText = 'Score : ' + player.score;
}
