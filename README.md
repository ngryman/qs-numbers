# qs-numbers

[![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

A [qs] plugin that enables `number` parsing.

## Usage

```javascript
var Qs = require('qs');
require('qs-numbers')(Qs);

var withNumbers = Qs.parse('a=1');     // { a: 1 }
var withoutNumbers = Qs._parse('a=1'); // { a: '1' }
var str = Qs.stringify(obj);           // 'a=1'
```

[npm-image]: http://img.shields.io/npm/v/qs-numbers.svg
[npm-url]: https://www.npmjs.org/package/qs-numbers
[travis-image]: http://img.shields.io/travis/ngryman/qs-numbers.svg
[travis-url]: https://travis-ci.org/ngryman/qs-numbers
[qs]: https://github.com/hapijs/qs