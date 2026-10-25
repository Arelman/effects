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
    note: 'Клубящийся дым из картинки, фон #111412. С ?bg=none становится прозрачным и ложится поверх любого макета. WebGL, цикл 12 с.',
    transparent: true,
    preview: 'green-plume.html'
  },
  {
    file: 'green-ribbon.html',
    title: 'Green ribbon',
    note: 'S-образная лента дыма из картинки, фон #111412. С ?bg=none становится прозрачной. WebGL, цикл 12 с.',
    transparent: true,
    preview: 'green-ribbon.html'
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
  },
  {
    file: 'smoke-5x1-wave.html',
    title: 'Smoke 5:1 · волна',
    note: 'Горизонтальная волна-линия с облачным всплеском справа — формат для длинных баннеров. Фон #111412. WebGL, цикл 16 с.',
    ratio: '5 / 1'
  },
  {
    file: 'smoke-4x3-corner.html',
    title: 'Smoke 4:3 · угол',
    note: 'Дым из угла — та же композиция, что в Smoke A, пересобранная под широкий формат. Фон #111412. WebGL, цикл 16 с.',
    ratio: '4 / 3'
  },
  {
    file: 'smoke-2x5-corner.html',
    title: 'Smoke 2:5 · угол',
    note: 'Вертикальный формат: дым из верхнего угла, рукава уходят вниз и вбок. Фон #111412. WebGL, цикл 16 с.',
    ratio: '2 / 5'
  }
];
