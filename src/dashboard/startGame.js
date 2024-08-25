/** @format */
import { playerReset } from '../../index.js';
import { updateScore } from '../handlers/updateScore.js';
import { update } from '../dashboard/stop/stop.js';
import resetGame from './reset/reset.js';
import { updateCollapse } from '../handlers/updateCollapse.js';
import { updateSpeed } from '../handlers/updateSpeed.js';

const btnStart = document.getElementById('start');

export function startGame() {
  btnStart.addEventListener('click', () => {
    playerReset();
    updateScore();
    updateCollapse();
    updateSpeed();
    update();
  });
}

resetGame();
