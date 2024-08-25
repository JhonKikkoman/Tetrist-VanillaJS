/** @format */

// матрица поля(многомерный массив), где w(число) ширина, h(число) высота поля
// от w и h зависит количество элементов в подмассиве
// инициирует создание поля(одни раз!)
export function createMatrix(w, h) {
  const matrix = [];
  while (h--) {
    matrix.push(new Array(w).fill(0));
  }
  return matrix;
}
