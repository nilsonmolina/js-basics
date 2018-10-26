/* global d3:true db:true */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/*---------------------------
  VARIABLES
---------------------------*/
const dims = { height: 320, width: 320, radius: 140 };
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

// legend setup
const legendGroup = svg.append('g')
  .attr('transform', `translate(${dims.width + 40}, 10)`);

const legend = d3.legendColor()
  .shape('circle')
  .shapePadding(10)
  .scale(color);

// tooltip setup
const tooltip = d3.tip()
  .attr('class', 'tip card')
  .html((d) => {
    let content = `<div class="name">${d.data.name}</div>`;
    content += `<div class="cost">${d.data.cost}</div>`;
    content += '<div class="delete">Click slice to delete</div>';
    return content;
  });

graph.call(tooltip);

// update function
const update = (data) => {
  // update color scale domain
  color.domain(data.map(d => d.name));

  // update and call legend
  legendGroup.call(legend)
    .selectAll('text')
    .attr('fill', 'white');

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
  paths.attr('d', arcPath)
    .transition()
    .duration(1000)
    .attrTween('d', arcTweenUpdate);

  // create virtual paths & append to DOM
  paths.enter()
    .append('path')
    .attr('class', 'arc')
    .attr('stroke', '#fff')
    .attr('stroke-width', 3)
    .attr('fill', d => color(d.data.name))
    .each(function f(d) { this._current = d; })
    .transition()
    .duration(1000)
    .attrTween('d', arcTweenEnter);

  // add events
  graph.selectAll('path')
    .on('click', handleClick)
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut);
  // .on('mouseover', (d, i, n) => {
  //   tooltip.show(d, n[i]);
  //   handleMouseOver(d, i, n);
  // }).on('mouseout', (d, i, n) => {
  //   tooltip.hide();
  //   handleMouseOut(d, i, n);
  // });
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

// use function keyword to allow 'this'
function arcTweenUpdate(d) {
  // interpolate between the two objects
  const i = d3.interpolate(this._current, d);
  // update the current prop with updated data
  this._current = i(1);

  return function f(t) {
    return arcPath(i(t));
  };
}

const handleMouseOver = (d, i, n) => {
  d3.select(n[i])
    .transition('changeSliceFill')
    .duration(300)
    // .attr('fill', '#fff');
    .attr('transform', 'scale(1.1)');
  tooltip.show(d, n[i]);
};

const handleMouseOut = (d, i, n) => {
  d3.select(n[i])
    .transition('changeSliceFill')
    .duration(300)
    // .attr('fill', color(d.data.name));
    .attr('transform', 'scale(1)');
  tooltip.hide();
};

const handleClick = (d) => { db.collection('expenses').doc(d.data.id).delete(); };
