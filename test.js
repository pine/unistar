'use strict'

const test = require('tape')
const unistar = require('./index')

test('LTR', t => {
  t.equal(unistar(0, 0), '')
  t.equal(unistar(0, 1), '\u2606')
  t.equal(unistar(1, 1), '\u2605')
  t.equal(unistar(1, 3), '\u2605\u2606\u2606')
  t.equal(unistar(2, 3), '\u2605\u2605\u2606')
  t.equal(unistar(3, 3), '\u2605\u2605\u2605')

  t.throws(() => unistar(1, 0), Error)
  t.throws(() => unistar(2, 1), Error)
  t.throws(() => unistar(4, 3), Error)

  t.end()
})

test('RTL', t => {
  t.equal(unistar(0, 0, true), '')
  t.equal(unistar(0, 1, true), '\u2606')
  t.equal(unistar(1, 1, true), '\u2605')
  t.equal(unistar(1, 3, true), '\u2606\u2606\u2605')
  t.equal(unistar(2, 3, true), '\u2606\u2605\u2605')
  t.equal(unistar(3, 3, true), '\u2605\u2605\u2605')

  t.throws(() => unistar(1, 0, true), Error)
  t.throws(() => unistar(2, 1, true), Error)
  t.throws(() => unistar(4, 3, true), Error)

  t.end()
})
