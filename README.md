# Green effects

Два бесшовных анимированных фона 16:9 на чистом HTML — для встраивания в Figma Sites, Tilda, Notion и любые сайты через iframe.

| Файл | Что внутри | Технология |
|---|---|---|
| `green-wave.html` | зелёная волна из 64 нитей, яркая жила по гребню, цикл 14 с | Canvas 2D |
| `green-smoke.html` | объёмный зелёный дым, шлейф, искры, цикл 16 с | WebGL, фрагментный шейдер |
| `index.html` | титульная страница с живыми превью и кодом для вставки | — |

## Ссылки

После публикации:

- `https://USERNAME.github.io/REPO/` — титульная страница
- `https://USERNAME.github.io/REPO/green-wave.html`
- `https://USERNAME.github.io/REPO/green-smoke.html`

## Встраивание

```html
<iframe src="https://USERNAME.github.io/REPO/green-wave.html"
        width="100%" height="100%"
        style="border:0;display:block;aspect-ratio:16/9"
        loading="lazy" title="Green wave"></iframe>
```

В Figma Sites: **Insert → Embeds → URL** (или **HTML** для iframe-кода), пропорции блока — 16:9.

## Особенности

- Нет внешних зависимостей, шрифтов и запросов — файлы работают офлайн.
- Анимация останавливается, когда блок вне экрана, и не грузит процессор.
- При `prefers-reduced-motion: reduce` показывается статичный кадр.
