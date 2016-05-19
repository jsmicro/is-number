'use strict';

if (!global.hasOwnProperty('isNumber')) global.isNumber = isNumber;
if (!global.hasOwnProperty('isNotNumber')) global.isNotNumber = isNotNumber;

/**
 * Check does the given javascript object is a Number.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNumber(object) {
    return toString.call(object) === '[object Number]';
}

/**
 * Check does the given javascript object is not a Number.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotNumber(object) {
    return !isNumber(object);
}

module.exports = {isNumber, isNotNumber};
