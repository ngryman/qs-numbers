/*!
 * qs-numbers
 * Copyright (c) 2014 Nicolas Gryman <ngryman@gmail.com>
 */

'use strict';


/**
 * Recursive function that tries to convert numeric properties of a given object.
 *
 * @param {object} obj
 * @param {array} [refs]
 */

function parseNumbers(obj, refs) {
	refs = refs || [];
	var lookup = refs.indexOf(obj);
	if (lookup !== -1) return;

	refs.push(obj);

	for (var p in obj) {
		if (!Object.prototype.hasOwnProperty.call(obj, p)) continue;

		var val = obj[p];

		if ('object' == typeof val) {
			parseNumbers(val, refs);
			continue;
		}

		if (isNumber(val))
			obj[p] = parseFloat(val);
	}
}


/**
 * Check if the given value is a number.
 * Borrowed from jQuery: https://github.com/jquery/jquery/blob/c869a1ef8a031342e817a2c063179a787ff57239/src/core.js#L214
 *
 * @param val
 * @returns {boolean}
 */

function isNumber(val) {
	return !Array.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}


/**
 * Exports a function that will proxy the default `qs.parse` function.
 * The old one is still available via `qs._parse`.
 *
 * @param {object} qs
 */

module.exports = function(qs) {
	qs._parse = qs.parse;

	qs.parse = function(str, options) {
		var obj = qs._parse(str, options);
		parseNumbers(obj);
		return obj;
	};
};