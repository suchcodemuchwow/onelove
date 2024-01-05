# onelove 🫶

<img src="https://media.giphy.com/media/YlYzh2nwfndCxSiuXq/giphy.gif" width="240" height="200"/>

## Motivation

Over the time while developing projects that requires different stacks(frontend, mobile, extension, desktop, api, scraper etc.) I found myself repeating and not being productive because of all the effort to maintain repo chores. This is an effort to end the pain...

## Goals

- Use most popular templates/libraries/frameworks
- Try to be unopiniated as much as possible
- Do not include unnecessary logic/code

## Using this example

### Install dependencies

```sh
pnpm install
```

### Development

```
pnpm dev
```

## What's inside?

This Turborepo includes the following packages/apps:

#### Apps

- `frontend`: a [Next.js](https://nextjs.org/) app
- `api`: a [Nest.js](https://nestjs.com/) api
- `mobile`: a [React Native-Expo](https://expo.dev/) app
- `extension`: a [Plasmo](https://www.plasmo.com/) browser extension
- `desktop`: an [Electron](http://electron.atom.io/) app
- `scraper`: a [Playwright](https://playwright.dev/) app

#### Packages

- `@acme/ui`: [Shadcn](https://ui.shadcn.com/) ui library
- `@acme/eslint-config`: `eslint` configurations
- `@acme/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Renovate](https://docs.renovatebot.com) for dependency updates
- [Lefthook](https://github.com/evilmartians/lefthook) for git hooks

## Roadmap

- [ ] Tests
- [ ] Github workflows
