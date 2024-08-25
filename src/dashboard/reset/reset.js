/** @format */

import { playerReset } from '../../../index.js';
import { player, arena } from '../../constants.js';
import { updateCollapse } from '../../handlers/updateCollapse.js';
import { updateScore } from '../../handlers/updateScore.js';
import { updateSpeed } from '../../handlers/updateSpeed.js';

const reset = document.getElementById('reset');

export default function resetGame() {
  reset.addEventListener('click', () => {
    player.score = 0;
    player.collapseCount = 0;
    player.speed = 1;
    updateCollapse();
    updateScore();
    updateSpeed();
    arena.forEach((row) => row.fill(0));
    playerReset();
  });
}
