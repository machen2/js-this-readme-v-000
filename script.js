console.log(this === window);

function checkThis(){
  'use strict';
  console.log(this);
}
checkThis();
// outputs "undefined"

function Chair(style, color) {
  this.style = style;
  this.color = color;
  console.log(this);
}
var sofa = new Chair("sofa", "green");

var couch = {
  color: 'green',
  f: function() {
    return this;
  }
};

console.log(couch.f());
// outputs object
