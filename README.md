## Tooling

- NextJS
- Emotion
- Vercel

## Editing Questions

Quiz questions are kept in `data/question.js`

Questions follow the strucutre:

```js
  {
    id: 1,
    title: 'Nessie is a famous monster who lives in which loch?',
    correct: 'Loch Ness',
    options: ['Loch Lomond', 'Loch Rannoch', 'Loch Choire', 'Loch Ness'],
  }
```

> **Gotchas**
>
> - Make sure the `correct` value also exists in the `options` array or the answer will always be marked as incorrect.
> - The question `id` must be entered manually.

## Getting Started

Install dependencies

```
yarn
```

Run the development server

```
yarn dev
```
