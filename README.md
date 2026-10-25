# Ресурсы для проектов

Небольшая библиотека визуальных элементов: каждый — один самодостаточный HTML-файл без зависимостей и внешних запросов. Открывается по прямой ссылке и вставляется в любой конструктор через `iframe`.

**Каталог:** https://arelman.github.io/effects/

## Структура

```
.
├── index.html              каталог: превью, ссылки, кнопки копирования
├── assets.js               список элементов (одна строка на элемент)
├── green-wave.html         волна из нитей · Canvas 2D · цикл 14 с
├── green-smoke.html        объёмный дым с искрами · WebGL · цикл 16 с
├── green-plume.html        клубящийся дым · WebGL · alpha · цикл 12 с
├── green-ribbon.html       лента дыма · WebGL · alpha · цикл 12 с
├── smoke-1-corner.html     дым A · угол        ┐
├── smoke-2-ribbon.html     дым B · лента       │ первое поколение
├── smoke-3-plume.html      дым C · шлейф       ┘
├── smoke-v2-1-corner.html  дым v2 A · угол     ┐
├── smoke-v2-2-ribbon.html  дым v2 B · лента    │ плотнее ядро, круглее клубы
├── smoke-v2-3-plume.html   дым v2 C · шлейф    ┘
├── smoke-5x1-wave.html     дым · волна  5:1    ┐
├── smoke-4x3-corner.html   дым · угол   4:3    │ форматы под макеты
├── smoke-2x5-corner.html   дым · угол   2:5    ┘
├── .gitignore              папка с исходниками не публикуется
└── .nojekyll               отключает обработку Jekyll на GitHub Pages
```

Ссылка на элемент — это просто имя файла:

```
https://arelman.github.io/effects/green-wave.html
https://arelman.github.io/effects/green-plume.html
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

Необязательные поля: `transparent: true` — показать метку `alpha`; `preview: 'green-new.html?bg=checker'` — отдельный адрес для превью в каталоге; `ratio: '4 / 3'` — пропорция кадра карточки (по умолчанию 16:9, прописана и в коде iframe).

3. Закоммитить и запушить — каталог обновится сам, страницу руками править не нужно.

## Встраивание

```html
<iframe src="https://arelman.github.io/effects/green-wave.html"
        width="100%" height="100%"
        style="border:0;display:block;aspect-ratio:16/9"
        loading="lazy"></iframe>
```

В Figma Sites: **Insert → Embeds → URL** (ссылка на файл) либо **HTML** (код выше). Пропорции блока — 16:9.

## Параметры ссылки

К адресу любого элемента можно добавить параметры — они комбинируются.

| Параметр | Что делает |
| --- | --- |
| `?flip=1` | зеркальная версия по горизонтали |
| `?bg=none` | прозрачный фон (`green-plume.html`, `green-ribbon.html`) |
| `?bg=RRGGBB` | свой цвет фона, например `?bg=111412` |

```
https://arelman.github.io/effects/green-wave.html?flip=1
https://arelman.github.io/effects/green-ribbon.html?bg=none&flip=1
```

В каталоге у каждой карточки есть кнопка **Отразить** — она переворачивает превью и выдаёт ссылку уже с `?flip=1`.

## Особенности

- Фон у всех элементов одинаковый — `#111412`, поэтому они стыкуются между собой без швов.
- `green-plume.html` и `green-ribbon.html` по умолчанию тоже с фоном `#111412`, но умеют отдавать прозрачность: `?bg=none`.
- `smoke-*.html` держат фиксированный кадр (у большинства 16:9, есть 5:1, 4:3 и вертикальный 2:5) с фоном `#111412`, поэтому в блоке другой пропорции по краям будет заливка, а не обрезка.
- Для проверки прозрачности есть также `?bg=white` и `?bg=checker`.
- Анимация останавливается, когда блок вне экрана, и не грузит процессор.
- При `prefers-reduced-motion: reduce` показывается статичный кадр.
- `green-wave.html` и `green-smoke.html` работают и как обычная страница: фон занимает весь экран.
