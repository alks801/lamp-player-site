# Lamp Player: сайт

Сайт приложения [Lamp Player](https://github.com/alks801/lamp-player), публикуется через GitHub Pages из ветки `main`:

- https://alks801.github.io/lamp-player-site/ — главная (английский)
- https://alks801.github.io/lamp-player-site/ru.html — главная (русский)
- https://alks801.github.io/lamp-player-site/privacy.html — политика конфиденциальности, ссылка для Google Play

Обычный статический HTML без сборки, скриптов, внешних шрифтов и счётчиков: на этом сайте лежит политика конфиденциальности, поэтому он сам ничего о посетителях не собирает.

Кнопка «Скачать APK» на главных страницах ведёт на файл в [релизах этого репозитория](https://github.com/alks801/lamp-player-site/releases): так 30-мегабайтные сборки не раздувают историю git. Для новой версии: создать здесь релиз `vX.Y.Z` с файлом `LampPlayer-X.Y.Z-arm64.apk`, затем поправить ссылку и номер версии в `index.html` и `ru.html`.

`privacy.html` сделан из `docs/PRIVACY.md` репозитория приложения. Картинки в `img/` взяты из `docs/store/` там же и уменьшены.
