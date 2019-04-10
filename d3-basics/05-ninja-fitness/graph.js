/* global d3:true db:true */
/* eslint object-curly-newline: ["error", { "minProperties": 5 }] */
// /* eslint no-param-reassign: ["error", { "props": false }] */
// /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/*---------------------------
  SETUP & VARIABLES
---------------------------*/
const margin = { top: 40, right: 20, bottom: 50, left: 100 };
const graphWidth = 560 - margin.left - margin.right;
const graphHeight = 400 - margin.top - margin.bottom;

const svg = d3.select('.canvas')
  .append('svg')
  .attr('width', graphWidth + margin.left + margin.right)
  .attr('height', graphHeight + margin.top + margin.bottom);

const graph = svg.append('g')
  .attr('width', graphWidth)
  .attr('height', graphHeight)
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

const update = (data) => {
  console.log(data);
};

/*---------------------------
  DATA & FIRESTORE
---------------------------*/
let data = [];

db.collection('activities').onSnapshot((res) => {
  res.docChanges().forEach((change) => {
    const doc = { ...change.doc.data(), id: change.doc.id };

    switch (change.type) {
      case 'added':
        data.push(doc);
        break;
      case 'removed':
        data = data.filter(item => item.id !== doc.id);
        break;
      case 'modified': {
        const index = data.findIndex(item => item.id === doc.id);
        data[index] = doc;
        break;
      }
      default:
        break;
    }
  });

  update(data);
});
