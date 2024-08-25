/** @format */

import { player } from '../constants.js';

export function scoreMultiplier(num) {
  if (num) {
    switch (num) {
      case 1:
        player.score += 10;
        break;
      case 2:
        player.score += num * 10 + Math.round(num * 10 * 0.2);
        break;
      case 3:
        player.score += num * 10 + Math.round(num * 10 * 0.3);
        break;
      case 4:
        player.score += num * 10 + Math.round(num * 10 * 0.5);
        break;
      default:
        break;
    }
  }
  return;
}
