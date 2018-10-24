const canvas = d3.select('.canvas');
const svg = canvas.append('svg').attr('height', 600).attr('width', 600);

const group = svg.append('g')
  .attr('transform', 'translate()');

group.append('rect')
  .attr('width', 150)
  .attr('height', 100)
  .attr('fill', 'blue')
  .attr('x', 20)
  .attr('y', 20);

group.append('circle')
  .attr('r', 50)
  .attr('cx', 230)
  .attr('cy', 70)
  .attr('fill', 'pink');

group.append('line')
  .attr('x1', 290)
  .attr('y1', 20)
  .attr('x2', 320)
  .attr('y2', 120)
  .attr('stroke-width', 2)
  .attr('stroke', 'grey');

svg.append('text')
  .attr('x', 20)
  .attr('y', 200)
  .attr('fill', 'grey')
  .text('hello, player 1')
  .style('font-family', 'arial, sans-serif');

console.log(canvas, svg);
