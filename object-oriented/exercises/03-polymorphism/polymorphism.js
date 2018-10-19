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

  this.render = function render() {
    // let el = '<select>\n';
    // for (const item of this.items) {
    //   el += `  <option>${item}</option>\n`;
    // }
    // el += '</select>';
    // return el;

    return `<select>${this.items.map(item => `
  <option>${item}</option>`).join('')}
</select>`;
  };
}
HtmlSelectElement.prototype = new HtmlElement();


function HtmlImageElement(src = 'https://picsum.photos/200/300/?random') {
  this.src = src;

  this.render = function render() {
    return `<img src="${this.src}" />`;
  };
}
HtmlImageElement.prototype = new HtmlElement();


// Console Stuff
const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement(),
];
for (const el of elements) {
  console.log(el.render());
}

const e = new HtmlElement();
const s = new HtmlSelectElement();
const i = new HtmlImageElement();

console.log(e, s, i);
