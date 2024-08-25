/** @format */

// проверка достигла фигура любой границы поля(arena) или соприкоснулась с другой фигурой на поле
// возвращает булево значение
export function collide(arena, player) {
  // текущая фигура игрока
  const m = player.matrix;
  const o = player.pos;
  // если цикл вернет true, то фигура достигла края поля
  for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
        return true;
      }
    }
  }
  return false;
}
