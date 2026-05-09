# [ghastlith.github.io](https://ghastlith.github.io/)

My personal website, a place where you can find my social media profiles.

The website is made with Svelte, a component framework, and SvelteKit, a UI framework built on Svelte.

To set up a new environment, firstly install Node.js version 24 (or newer) and its dependencies and then run the application.

```sh
npm i
npm run dev
```

The [GitHub Actions pipeline](./.github/workflows/deploy-github-pages.yml) will take care of deploying automatically on master branch pushes, but this can also be done manually by running the deploy command.

```sh
npm i
npm run deploy
```
