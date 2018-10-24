/*----------------------------------------
  BASICS
----------------------------------------*/
const data = [
  { width: 200, height: 100, fill: 'pink' },
  { width: 100, height: 60, fill: 'purple' },
  { width: 50, height: 30, fill: 'red' },
];
// select svg container first
const svgBasics = d3.select('#basics');

// join data to rects
const rects = svgBasics.selectAll('rect').data(data);

// add attrs to rects already in the DOM
rects.attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

// append the enter selection to DOM
rects.enter()
  .append('rect')
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);


/*----------------------------------------
  EXTERNAL DATA SOURCE
----------------------------------------*/
// select svg container first
const svg = d3.select('#external-data');
// get data
d3.json('planets.json')
  .then((json) => {
    // join data to circles
    const circles = svg.selectAll('circle').data(json);
    // add attrs to circles already in the DOM
    circles.attr('cy', 100)
      .attr('cx', d => d.distance)
      .attr('r', d => d.radius)
      .attr('fill', d => d.fill);
    // append the enter selection to DOM
    circles.enter()
      .append('circle')
      .attr('cy', 100)
      .attr('cx', d => d.distance)
      .attr('r', d => d.radius)
      .attr('fill', d => d.fill);
  }).catch(err => console.log(err));
