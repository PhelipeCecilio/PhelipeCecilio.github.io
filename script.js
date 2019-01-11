/**
* Grid by Pavlovsk, some edits made.
* https://codepen.io/pavlovsk/pen/AXGYYv
**/
// Instead of writing HAML
function nJoin(n, fn) {
  return new Array(n)
    .join(' ')
    .split(' ')
    .map(typeof fn === 'function' ?
      fn : e => fn)
    .join('')
}

// Create <div></div> 320 times
var cells = nJoin(320, '<div></div>')
grid.innerHTML = cells

