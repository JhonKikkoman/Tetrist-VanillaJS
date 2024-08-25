/** @format */

import { player } from '../constants.js';

const collapse = document.getElementById('collapse');

//функция обвления кол-ва схлопываний заполненых рядов на поле
export function updateCollapse() {
  collapse.innerText = 'Collapse : ' + player.collapseCount;
}
