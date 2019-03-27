# unistar

[![npm](https://img.shields.io/npm/v/unistar.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.org/package/unistar)
[![Travis](https://img.shields.io/travis/pine/unistar/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/pine/unistar)
[![Dependency Status](https://img.shields.io/david/pine/unistar.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/unistar)
[![devDependency Status](https://img.shields.io/david/dev/pine/unistar.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/unistar?type=dev) [![Greenkeeper badge](https://badges.greenkeeper.io/pine/unistar.svg)](https://greenkeeper.io/)

:star: Make unicode star text

## Getting Started

```
$ yarn add unistar
```

or

```
$ npm i -S unistar
```

## Usage
### Import Library

```javascript
const unistar = require('unistar')
```

### Left to Right

|Code           |Result|
|---------------|------|
|`unistar(0, 5)`|&#9734;&#9734;&#9734;&#9734;&#9734;|
|`unistar(1, 5)`|&#9733;&#9734;&#9734;&#9734;&#9734;|
|`unistar(2, 5)`|&#9733;&#9733;&#9734;&#9734;&#9734;|
|`unistar(3, 5)`|&#9733;&#9733;&#9733;&#9734;&#9734;|
|`unistar(4, 5)`|&#9733;&#9733;&#9733;&#9733;&#9734;|
|`unistar(5, 5)`|&#9733;&#9733;&#9733;&#9733;&#9733;|

### Right to Left

|Code                 |Result|
|---------------------|------|
|`unistar(0, 5, true)`|&#9734;&#9734;&#9734;&#9734;&#9734;|
|`unistar(1, 5, true)`|&#9734;&#9734;&#9734;&#9734;&#9733;|
|`unistar(2, 5, true)`|&#9734;&#9734;&#9734;&#9733;&#9733;|
|`unistar(3, 5, true)`|&#9734;&#9734;&#9733;&#9733;&#9733;|
|`unistar(4, 5, true)`|&#9734;&#9733;&#9733;&#9733;&#9733;|
|`unistar(5, 5, true)`|&#9733;&#9733;&#9733;&#9733;&#9733;|

## License
Public Domain
