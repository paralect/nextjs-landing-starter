# MyProduct Landing site

Next.JS Landing Starter — is a [Next.JS](https://github.com/zeit/next.js) starter kit, which allow you start development of new landing site in matter of minutes. This repository is one of the compontents of [Stack family](https://github.com/paralect/stack) — a set of components for makers to ship better products faster 🚀. Stack is an number of open-source components, resulted from years of hard work on a number of awesome products. We carefully select, document and share our production-ready knowledge with you.

## Features

* 😍 **Nice-looking** common basic templates for the main, login and signup pages with bindings to API. Styles are based on [PostCSS](https://github.com/postcss/postcss) with [cssnext](https://github.com/MoOx/postcss-cssnext) + [LostGrid](https://github.com/peterramsing/lost) via [css modules](https://github.com/zeit/next-plugins/tree/master/packages/next-css).
* 🔥 **Hot reloading** with webpack
* ⚡️ **Server side rendering**
* 👮 **Secure** — separate client and server configuration to protect secure server-only items

## Getting Started

Just fork or clone and push repository into your own repo. Rename [SHIP_README.md](SHIP_README.md) into README.md. To keep your repository clean remove `CHANGELOG.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `LICENSE` and `.drone.yml`.

You can read develoment details [here](SHIP_README.md) — that will become a primary readme of your landing site.

#### Google Analytics

Take tracking Id from [Google Analytics](https://analytics.google.com) and paste in `/src/server/config/environment/development.js`
```
gaTrackingId: 'UA-XXXXX-Y'
```

## Start

In order to start nextjs server in the docker container you can use bash file `./bin/start.sh`:
```bash
$ ./bin/start.sh
```

Also, you need REST api server on several pages (sigun, signin). If you are using `paralect/koa-api-starter` then you can start this server using the corresponding command. Or you can start any other REST api server on port `3001`.

## Why Next.JS?

#### **Server-side rendering (SSR) a.k.a. [universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) app**
SSR is the requirement for the modern landing websites which allows the indexing of single-page applications for search engines such as google. Which means you can continue to have fun with your [favorite UI library](https://github.com/facebook/react) while having your awesome stuff seen in the web for everyone.

#### **Bundled react.js + webpack**.
Even though landing websites are often considered to consist of mostly static pages which do not require a tone of javascript code, we believe that having the same library across all your ecosystem leads to *predictable*, *clean*, *reusable* and *extendable* code.
<br />Because the basic handling of the form input with raw JS code is not a very pleasant thing, don't you remember?

#### **Prepared app structure with clearly defined conventions**
Next.js is built to simplify the life of developers and remove boilerplate code while giving the power of the latest technologies so it fully correlates with our goals.

#### Community driven and widely popular framework
Next.js is the most popular SSR framework for react with constant updates and improvements and big number of contributors. Two heads are better than one, 20k is even better.
