# JSMicro - Is Number

### **`isNumber(object)`**

Check does the given Javascript Object (array, object, string, etc) is a number.

### **`isNotNumber(object)`**

Check does the given Javascript Number (array, object, string, etc) is not a number.

## Browser Usage

```bash
bower install --save jsmicro-is-number
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-number/index.js">
<script type="text/javascript">
    var obj = 200;
    var nbr = 'String';

    // Available in the window object.
    isNumber(obj);      // true
    isNumber(nbr);      // false
    isNotNumber(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save jsmicro-is-number
```

```js
const obj = require('jsmicro-is-number');

// Available in the global object.
isNumber(2344342432); // true
isNumber('23322333'); // false
isNotNumber('23234'); // true

// Also available in the export object.
obj.isNumber(2343244432); // true
obj.isNumber('23322333'); // false
obj.isNotNumber('23333'); // true
```

## Changelogs

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
