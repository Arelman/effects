# Ресурсы для проектов

Небольшая библиотека визуальных элементов: каждый — один самодостаточный HTML-файл без зависимостей и внешних запросов. Открывается по прямой ссылке и вставляется в любой конструктор через `iframe`.

**Каталог:** https://arelman.github.io/green-wave/

## Структура

```
.
├── index.html          каталог: превью, ссылки, кнопки копирования
├── assets.js           список элементов (одна строка на элемент)
├── green-wave.html     волна из нитей · Canvas 2D · цикл 14 с
├── green-smoke.html    объёмный дым с искрами · WebGL · цикл 16 с
├── green-plume.html    клубящийся дым · WebGL · alpha · цикл 12 с
├── green-ribbon.html   лента дыма · WebGL · alpha · цикл 12 с
└── .nojekyll           отключает обработку Jekyll на GitHub Pages
```

Ссылка на элемент — это просто имя файла:

```
https://arelman.github.io/green-wave/green-wave.html
https://arelman.github.io/green-wave/green-plume.html
```

## Добавить новый элемент

1. Положить файл в корень репозитория.
2. Дописать строку в `assets.js`:

```js
{
  file: 'green-new.html',
  title: 'Green new',
  note: 'Что это и как сделано.'
}
```

Необязательные поля: `transparent: true` — показать метку `alpha`; `preview: 'green-new.html?bg=dark'` — отдельный адрес для превью в каталоге.

3. Закоммитить и запушить — каталог обновится сам, страницу руками править не нужно.

## Встраивание

```html
<iframe src="https://arelman.github.io/green-wave/green-wave.html"
        width="100%" height="100%"
        style="border:0;display:block;aspect-ratio:16/9"
        loading="lazy"></iframe>
```

В Figma Sites: **Insert → Embeds → URL** (ссылка на файл) либо **HTML** (код выше). Пропорции блока — 16:9.

## Особенности

- `green-plume.html` и `green-ribbon.html` имеют прозрачный фон — их можно класть поверх макета, фона другого блока или градиента.
- Для проверки прозрачности у этих файлов есть параметр `?bg=dark`, `?bg=white` или `?bg=checker`.
- Анимация останавливается, когда блок вне экрана, и не грузит процессор.
- При `prefers-reduced-motion: reduce` показывается статичный кадр.
- `green-wave.html` и `green-smoke.html` работают и как обычная страница: фон занимает весь экран.
