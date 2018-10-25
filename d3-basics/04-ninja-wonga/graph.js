/* global d3:true db:true */
/*---------------------------
  VARIABLES
---------------------------*/
const dims = { height: 350, width: 350, radius: 175 };
const center = { x: (dims.width / 2 + 5), y: (dims.height / 2 + 5) };

const svg = d3.select('.canvas')
  .append('svg')
  .attr('width', dims.width + 150)
  .attr('height', dims.height + 150);

const graph = svg.append('g')
  .attr('transform', `translate(${center.x}, ${center.y})`);

const pie = d3.pie()
  .sort(null)
  .value(d => d.cost);

const arcPath = d3.arc()
  .outerRadius(dims.radius)
  .innerRadius(dims.radius / 2);

const color = d3.scaleOrdinal(d3.schemeSet3);

// update function
const update = (data) => {
  // update color scale domain
  color.domain(data.map(d => d.name));

  // join enhanced (pie) data to path elements
  const paths = graph.selectAll('path')
    .data(pie(data));

  // handle the exit selection
  paths.exit()
    .transition()
    .duration(1000)
    .attrTween('d', arcTweenExit)
    .remove();

  // update the paths already in DOM
  paths.attr('d', arcPath);

  // create virtual paths & append to DOM
  paths.enter()
    .append('path')
    .attr('class', 'arc')
    .attr('stroke', '#fff')
    .attr('stroke-width', 3)
    .attr('fill', d => color(d.data.name))
    .transition()
    .duration(1000)
    .attrTween('d', arcTweenEnter);
};

// data array and firestore
let data = [];

db.collection('expenses').onSnapshot((res) => {
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

const arcTweenEnter = (d) => {
  const i = d3.interpolate(d.endAngle, d.startAngle);

  return function f(t) {
    d.startAngle = i(t);
    return arcPath(d);
  };
};

const arcTweenExit = (d) => {
  const i = d3.interpolate(d.startAngle, d.endAngle);

  return function f(t) {
    d.startAngle = i(t);
    return arcPath(d);
  };
};
