'use strict'

var checked = '\u2605'
var unchecked = '\u2606'

module.exports = function (val, max, rtl) {
  if (val > max) {
    throw new Error('`val` should be less than or equal `max`')
  }

  var i
  var text = ''

  if (rtl) {
    for (i = 0; i < max - val; ++i) text += unchecked
    for (i = 0; i < val; ++i) text += checked
  } else {
    for (i = 0; i < val; ++i) text += checked
    for (i = 0; i < max - val; ++i) text += unchecked
  }

  return text
}
