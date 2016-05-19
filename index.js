(function() {
    'use strict';

    if (!window.hasOwnProperty('isNumber')) window.isNumber = isNumber;
    if (!window.hasOwnProperty('isNotNumber')) window.isNotNumber = isNotNumber;

    function isNumber(object) {
        return toString.call(object) === '[object Number]';
    }

    function isNotNumber(object) {
        return !isNumber(object);
    }
})();
