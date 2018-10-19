function HtmlElement() {
  this.click = function click() {
    console.log('clicked');
  };
}
HtmlElement.prototype.focus = function focus() {
  console.log('focused');
};


function HtmlSelectElement(arr = []) {
  this.items = arr.constructor === Array ? arr : [];

  this.addItem = function addItem(item) {
    this.items.push(item);
  };

  this.removeItem = function removeItem(item) {
    this.items = this.items.filter(e => e !== item);
  };
}
HtmlSelectElement.prototype = new HtmlElement();

const e = new HtmlElement();
const s = new HtmlSelectElement();
console.log(e, s);
