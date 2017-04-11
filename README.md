# unistar

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

```javascript
const unistar = require('unistar')

// Left to Right
unistar(0, 5) // ☆☆☆☆☆
unistar(1, 5) // ★☆☆☆☆
unistar(2, 5) // ★★☆☆☆
unistar(3, 5) // ★★★☆☆
unistar(4, 5) // ★★★★☆
unistar(5, 5) // ★★★★★

// Right to Left
unistar(0, 5, true) // ☆☆☆☆☆
unistar(1, 5, true) // ☆☆☆☆★
unistar(2, 5, true) // ☆☆☆★★
unistar(3, 5, true) // ☆☆★★★
unistar(4, 5, true) // ☆★★★★
unistar(5, 5, true) // ★★★★★
```

## License
Public Domain
