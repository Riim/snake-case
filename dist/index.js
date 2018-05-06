"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reLetters = /[A-Z][^A-Z]/g;
var reLetters2 = /[A-Z]{2,}/g;
var reWord = /[a-z]+[0-9]*/gi;
var cache = Object.create(null);
function snakeCase(str, useCache) {
    str = String(str);
    var value;
    return ((useCache && cache[str]) ||
        ((value = (str
            .replace(reLetters, function (word) { return '-' + word; })
            .replace(reLetters2, function (word) { return '-' + word; })
            .match(reWord) || [])
            .join('_')
            .toLowerCase()),
            useCache ? (cache[str] = value) : value));
}
exports.snakeCase = snakeCase;
