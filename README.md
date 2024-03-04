# Прототип блока Progress

## Инициализация Progress

new Progress(containerSelector, options) - инициализация с параметрами

• containerSelector - Строка с CSS-селектором HTML-элемента контейнера Progress(обязательный параметр)
• options - объект с параметрами Progress(необязательный параметр)

Например:

<pre>
    new Progress('.progress', { initialValue: 50, animated: true, hidden: false });
</pre>

## Параметры options:

• initialValue - параметр базового состояния Normal, которым можно управлять
размером дуги, отражающей прогресс. Тип number от 0 до 100.
• animated - параметр независимого состояния Animated, при котором блок или его элементы
начинают вращаться с некоторым периодом по часовой стрелке. Тип boolean.
• hidden - параметр состояния скрывающего прогресс. Тип boolean.

## Доступные команды

1. Установка зависимостей

```bash
npm i
```

2. Запуск проекта

```bash
npm start
```

3. Билд проекта

```bash
npm run predeploy
```

4. Деплой проекта на github pages

```bash
npm run deploy
```

## Ссылка

[GitHub Page](https://roma3928.github.io/progress-block/)

## Стек

- JS
- HTML
- SCSS
- Webpack
