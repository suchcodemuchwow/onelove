# onelove 🫶

[![One Love](https://www.youtube.com/watch?v=vdB-8eLEW8)](http://www.youtube.com/watch?v=vdB-8eLEW8 "One Love")

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
turbo run dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `frontend`: a [Next.js](https://nextjs.org/) app
- `rest-api`: a [Nest.js](https://nestjs.com/) api
- `mobile-app`: a [React Native-Expo](https://expo.dev/) app
- `browser-extension`: a [Plasmo](https://www.plasmo.com/) extension
- `desktop-app`: an [Electron](http://electron.atom.io/) app
- `scraper`: a [Playwright](https://playwright.dev/) app
- `@repo/ui`: a [Shadcn](https://ui.shadcn.com/) React component library
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Renovate](https://docs.renovatebot.com) for dependency updates
