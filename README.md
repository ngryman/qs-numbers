# qs-numbers

[![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

A [qs] plugin that enables `number` parsing.

---

:warning: There is now a simpler method to achieve the same thing out-of-the-box:
```js
var qs = require('qs');
var withNumbers = qs.parse('a=1', {
  decoder: str => Number.isNumber(str) ? parseFloat(str) : str
})
```

---

## Usage

```javascript
var qs = require('qs');
require('qs-numbers')(qs);

var withNumbers = qs.parse('a=1');     // { a: 1 }
var withoutNumbers = qs._parse('a=1'); // { a: '1' }
var str = qs.stringify(obj);           // 'a=1'
```

[npm-image]: http://img.shields.io/npm/v/qs-numbers.svg
[npm-url]: https://www.npmjs.org/package/qs-numbers
[travis-image]: http://img.shields.io/travis/ngryman/qs-numbers.svg
[travis-url]: https://travis-ci.org/ngryman/qs-numbers
[qs]: https://github.com/hapijs/qs
