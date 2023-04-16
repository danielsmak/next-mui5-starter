![Banner](/github-assets/next_mui5_starter_banner.png)

# Next.js + MUI5 + NextTranslate Starter

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Create config file](#create-config-file)
  - [Building sitemaps](#building-sitemaps)
    - [Custom config file](#custom-config-file)
    - [Building sitemaps with pnpm](#building-sitemaps-with-pnpm)
- [Index sitemaps](#index-sitemaps-optional)
- [Splitting large sitemap into multiple files](#splitting-large-sitemap-into-multiple-files)
- [Configuration Options](#configuration-options)
- [Custom transformation function](#custom-transformation-function)
- [Full configuration example](#full-configuration-example)
- [Generating dynamic/server-side sitemaps](#generating-dynamicserver-side-sitemaps)
- [Typescript JSDoc](#typescript-jsdoc)

## How to use

Download the example [or clone the repo](https://github.com/mui/material-ui):

<!-- #default-branch-switch -->

```sh
curl https://codeload.github.com/mui/material-ui/tar.gz/master | tar -xz --strip=2  material-ui-master/examples/nextjs
cd nextjs
```

Install it and run:

```sh
npm install
npm run dev
```

or:

<!-- #default-branch-switch -->

[![Edit on StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/mui/material-ui/tree/master/examples/nextjs)

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/mui/material-ui/tree/master/examples/nextjs)

## The idea behind the example

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.
It includes `@mui/material` and its peer dependencies, including `emotion`, the default style engine in MUI v5.
If you prefer, you can [use styled-components instead](https://mui.com/material-ui/guides/interoperability/#styled-components).

## The link component

The [example folder](https://github.com/mui/material-ui/tree/HEAD/examples/nextjs-with-typescript) provides an adapter for the use of [Next.js's Link component](https://nextjs.org/docs/api-reference/next/link) with MUI.
More information [in the documentation](https://mui.com/material-ui/guides/routing/#next-js).

## What's next?

<!-- #default-branch-switch -->

You now have a working example project.
You can head back to the documentation, continuing browsing it from the [templates](https://mui.com/material-ui/getting-started/templates/) section.
