/*
TODO step 1: Default settings before working with the canvas
*/
// get the canvas from component tree
const canvas = document.getElementById("draw-area");

// get context of canvas
const ctx = canvas.getContext("2d");


/*
TODO step 2: Setting attributes for the canvas
*/
// change width and height of the canvas to be full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*
TODO step 3: Setting attributes for the canvas' context
*/
// brush color
ctx.strokeStyle = "#BADA55"
// brush type
ctx.lineJoin = "round";
ctx.lineCap = "round";

/*
TODO step 4: Setting variables to manipulate the brush / the drawing action
*/
// boolean to keep track of the drawing action
let isDrawing = false;
// keep track of the last position of the brush 
let lastX = 0;
let lastY = 0;

const painter = (e) => {
  // if the mouse is not clicked and dragged, do nothing
  if (!isDrawing) return;
  console.log(e);

  // create drawing line
  // begin render the line
  ctx.beginPath();
  // starting from here, create a line to...
  ctx.moveTo(lastX, lastY);
  // ... to here
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

/*
TODO step 5: binding events with the canvas and the brush (the mouse)
*/
// only when the user click and drag, that the canvas shows something
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mousemove', painter);
// only when the user click and drag, otherwise, ignore
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
