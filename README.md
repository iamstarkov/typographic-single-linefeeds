# typographic-single-linefeeds

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> [Only when you want a new paragraph][rtfm]

Micro module to help eliminate one of the [bad typewriter habits][habits].


## Install

```sh
npm install --save typographic-single-linefeeds
```


## Usage

```js
var singleLinefeeds = require('typographic-single-linefeeds');

singleLinefeeds(`foo\n\nbar`);    // foo\nbar
singleLinefeeds(`foo\n\n\nbar`);  // foo\nbar
singleLinefeeds(`\n\n\nfoo`);     // foo
singleLinefeeds(`foo\n\n\n`);     // foo
```


## License

MIT © [Vladimir Starkov](http://vstarkov.com/)

[rtfm]: http://practicaltypography.com/carriage-returns.html
[habits]: http://practicaltypography.com/typewriter-habits.html

[npm-url]: https://npmjs.org/package/typographic-single-linefeeds
[npm-image]: http://img.shields.io/npm/v/typographic-single-linefeeds.svg

[travis-url]: https://travis-ci.org/iamstarkov/typographic-single-linefeeds
[travis-image]: http://img.shields.io/travis/iamstarkov/typographic-single-linefeeds.svg

[coveralls-url]: https://coveralls.io/r/iamstarkov/typographic-single-linefeeds
[coveralls-image]: http://img.shields.io/coveralls/iamstarkov/typographic-single-linefeeds.svg

[depstat-url]: https://david-dm.org/iamstarkov/typographic-single-linefeeds
[depstat-image]: https://david-dm.org/iamstarkov/typographic-single-linefeeds.svg

[depstat-dev-url]: https://david-dm.org/iamstarkov/typographic-single-linefeeds
[depstat-dev-image]: https://david-dm.org/iamstarkov/typographic-single-linefeeds/dev-status.svg
