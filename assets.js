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
  },
  {
    file: 'smoke-1-corner.html',
    title: 'Smoke A · угол',
    note: 'Композиция в углу. Контур обведён вручную, мягкое завихрение. Фиксированный кадр 16:9, фон #111412. WebGL, цикл 16 с.'
  },
  {
    file: 'smoke-2-ribbon.html',
    title: 'Smoke B · лента',
    note: 'Лента через кадр. Фиксированный кадр 16:9, фон #111412. WebGL, цикл 16 с.'
  },
  {
    file: 'smoke-3-plume.html',
    title: 'Smoke C · шлейф',
    note: 'Шлейф с плотным облаком. Фиксированный кадр 16:9, фон #111412. WebGL, цикл 16 с.'
  },
  {
    file: 'smoke-v2-1-corner.html',
    title: 'Smoke v2 A · угол',
    note: 'Та же композиция, плотнее ядро и круглее клубы. Фиксированный кадр 16:9, фон #111412. WebGL, цикл 16 с.'
  },
  {
    file: 'smoke-v2-2-ribbon.html',
    title: 'Smoke v2 B · лента',
    note: 'Лента через кадр, плотнее ядро и круглее клубы. Фиксированный кадр 16:9, фон #111412. WebGL, цикл 16 с.'
  },
  {
    file: 'smoke-v2-3-plume.html',
    title: 'Smoke v2 C · шлейф',
    note: 'Шлейф с плотным облаком, плотнее ядро и круглее клубы. Фиксированный кадр 16:9, фон #111412. WebGL, цикл 16 с.'
  }
];
