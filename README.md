# unistar

[![npm](https://img.shields.io/npm/v/unistar.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.org/package/unistar)
[![Travis](https://img.shields.io/travis/pine/unistar/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/pine/unistar)
[![Dependency Status](https://img.shields.io/david/pine/unistar.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/unistar)
[![devDependency Status](https://img.shields.io/david/dev/pine/unistar.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/pine/unistar?type=dev)

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
|`unistar(0, 5)`|☆☆☆☆☆ |
|`unistar(1, 5)`|★☆☆☆☆ |
|`unistar(2, 5)`|★★☆☆☆ |
|`unistar(3, 5)`|★★★☆☆ |
|`unistar(4, 5)`|★★★★☆ |
|`unistar(5, 5)`|★★★★★ |

### Right to Left

|Code                 |Result|
|---------------------|------|
|`unistar(0, 5, true)`|☆☆☆☆☆ |
|`unistar(1, 5, true)`|☆☆☆☆★ |
|`unistar(2, 5, true)`|☆☆☆★★ |
|`unistar(3, 5, true)`|☆☆★★★ |
|`unistar(4, 5, true)`|☆★★★★ |
|`unistar(5, 5, true)`|★★★★★ |

## License
Public Domain
