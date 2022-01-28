# CDD Gulp Starter

Gulp starter for Component Driven Development.

## Getting Started

1. Install [NodeJS](https://nodejs.org/en/).
2. Install Gulp CLI globally: `npm install --global gulp-cli`.
3. Install all local dependencies: `npm install`.
4. Run `npm run dev` to start the development environment.
5. Run `npm run prod` to build the project for production.
6. Run `npm run publish` to build the project and publish it on GitHub Pages.

Run commands in the **root** folder.

## Recommendations for use

### Pages

You place your pages in the **src** folder.

### Styles

You place your styles in the **src/scss** folder. Each SCSS file in this folder will be converted into a separate CSS file.

### Scripts

You place your scripts in the **src/js** folder. Webpack converts each file in this folder into a separate bundle with a corresponding name.

### Assets

You place your assets such as fonts, images, videos in the **src/assets** folder. Starter doesn't change these assets.

### Components

You place your components in the **src/components** folder.

You include components' HTML files in pages using [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) default syntax.

You include components' SCSS files in SCSS files, which are located in the **src/scss**, using [@import](https://sass-lang.com/documentation/at-rules/import) at-rule. For example,
`@import "../components/your-component/your-component.scss"`.

You include components' JavaScript files in JavaScript files, which are located in the **src/js**, using [ES6 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import). For example,
`import "../components/your-component/your-component.js"`.