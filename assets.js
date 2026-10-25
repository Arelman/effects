/* Каталог ресурсов.
   Чтобы добавить новый элемент: положите файл в корень репозитория
   и добавьте одну строку в массив ниже. Всё. */

window.ASSETS = [
  {
    file: 'green-wave.html',
    title: 'Green wave',
    note: 'Волна из 64 светящихся нитей. Canvas 2D, цикл 14 с.'
  },
  {
    file: 'green-smoke.html',
    title: 'Green smoke',
    note: 'Объёмный дым с искрами, непрозрачный фон. WebGL, цикл 16 с.'
  },
  {
    file: 'green-plume.html',
    title: 'Green plume',
    note: 'Клубящийся дым из картинки. Прозрачный фон — ложится поверх любого макета. WebGL, цикл 12 с.',
    transparent: true,
    preview: 'green-plume.html?bg=dark'
  },
  {
    file: 'green-ribbon.html',
    title: 'Green ribbon',
    note: 'S-образная лента дыма из картинки. Прозрачный фон. WebGL, цикл 12 с.',
    transparent: true,
    preview: 'green-ribbon.html?bg=dark'
  }
];
