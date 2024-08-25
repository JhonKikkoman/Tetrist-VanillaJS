/** @format */

import { player } from '../constants.js';
import { updateSpeed } from '../handlers/updateSpeed.js';

// текущая скорость
let currentSpeed = 0;

export function speedMultiplier() {
  switch (player.collapseCount) {
    case 10:
      currentSpeed = 200;
      player.speed = 2;
      updateSpeed();
      break;
    case 20:
      currentSpeed = 400;
      player.speed = 3;
      updateSpeed();
      break;
    case 30:
      currentSpeed = 600;
      player.speed = 4;
      updateSpeed();
      break;
    case 40:
      currentSpeed = 800;
      player.speed = 5;
      updateSpeed();
      break;
    default:
      break;
  }

  return currentSpeed;
}
