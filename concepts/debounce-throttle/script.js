/*---------------------
  DEBOUNCE & THROTTLE
---------------------*/
function debounce(fn, wait = 250) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(), wait);
  };
}

function throttle(fn, threshold = 250) {
  let last;
  let timeout;
  return () => {
    let now = new Date().getTime();
    if (last && now < last + threshold) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        last = now;
        fn();
      }, threshold);
    } else {
      last = now;
      fn();
    }
  };
}

/*---------------------
  onKeyUp
---------------------*/
const searchNormal = document.querySelector('#search-normal');
const searchDebounce = document.querySelector('#search-debounce');
const searchThrottle = document.querySelector('#search-throttle');

// EVENT LISTENER FUNCTIONS
searchNormal.addEventListener('keyup', getData.bind(this, searchNormal));
searchDebounce.addEventListener('keyup', debounce(getData.bind(this, searchDebounce), 500));
searchThrottle.addEventListener('keyup', throttle(getData.bind(this, searchThrottle), 500));

// EVENT LISTENER FUNCTIONS
function getData(data) {
  console.log('Fetching Data...', data.value);
}

/*---------------------
  onMouseMove
---------------------*/
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const canvasTimeScale = 5 * 1000;
const paintColors = ['#bbd', '#464', '#d88'];
const totalLanes = paintColors.length;
const leftMargin = 100;
let startTime = null;

canvas.width = window.innerWidth - 250;
flush();

// EVENT LISTENER FUNCTIONS
const mouseArea = document.querySelector('#mouse-area');
mouseArea.addEventListener('mousemove', handleMove.bind(this, 0));
mouseArea.addEventListener('mousemove', debounce(handleMove.bind(this, 1), 300));
mouseArea.addEventListener('mousemove', throttle(handleMove.bind(this, 2), 300));

// EVENT LISTENER FUNCTIONS
function handleMove(lane) {
  paintRect(lane, getTimeDiff());
}

// HELPER FUNCTIONS
function flush() {
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = '200 18px Roboto,Helvetica,Arial';
  context.fillStyle = paintColors[0];
  context.fillText('regular', 0, 100);

  context.fillStyle = paintColors[1];
  context.fillText('debounce', 0, 300);

  context.fillStyle = paintColors[2];
  context.fillText('throttle', 0, 500);
}

function paintRect(lane, time) {
  if (time > canvasTimeScale) {
    startTime += time;
    time = 0;
    flush();
  }
  context.fillStyle = paintColors[lane];
  let x = (canvas.width - leftMargin) / canvasTimeScale * time + leftMargin;
  let y = canvas.height / totalLanes * lane;
  let width = 1;
  let height = canvas.height / totalLanes;

  context.fillRect(x, y, width, height);
}

function getTimeDiff() {
  let time = new Date().getTime();
  if (!startTime) startTime = time;    
  return time - startTime;
}



// // ORIGINAL ATTEMPT AT DEBOUNCE AND THROTTLE
// function debounce(fn, delay = 250) {
//   let timer;
//   return function() {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(`debounce - ${searchDebounce.value}`), delay);
//   };
// }

// function throttle(fn, delay = 250) {
//   let interval;
//   return function() {
//     if (interval) return;
//     interval = setInterval(() => fn(`throttle - ${searchThrottle.value}`), delay);
//   }
// }