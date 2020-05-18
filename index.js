var maxIterations = 80;
var zoom = 200;
var creal;
var cimag;
var c;
var running = false;

function setup () {
  console.clear();
  colorMode(HSB, 100);
  var width = 600;
  var height = 600;
  noStroke();
  createCanvas(width, height);
  creal = 0;
  cimag = 0;
  c = new ComplexNumber(creal, cimag);
}

function draw () {
  if (running) {
    main();
    running = !running;
  }
}

function main () {
  resizeCanvas(width, height);
  translate(width * 0.5, height * 0.5);
  c = new ComplexNumber(creal, cimag);
  for (var i = width * -0.5; i < width * 0.5; i++) {
    for (var j = height * -0.5; j < height * 0.5; j++) {
      let z0 = new ComplexNumber(i / zoom, j / zoom);
      let m = julia(c,z0);
      let hue = 100 * m / maxIterations;
      let saturation = 100;
      let brightness = (m < maxIterations) ? 100 : 0;
      stroke(hue, saturation, brightness);
      point(i, -j);
    }
  }
  drawAxes();
}

function drawAxes () {
  strokeWeight(1);
  stroke(0,0,0);
  line(-0.5 * width, 0, 0.5 * width, 0);
  line(0, -0.5 * height, 0, 0.5 * height);

  //line(-0.5 * zoom, -10, -0.5 * zoom, 10); //-0.5
  line(-1 * zoom, -10, -1 * zoom, 10);
  //line(-1.5 * zoom, -10, -1.5 * zoom, 10);
  line(-2 * zoom, -10, -2 * zoom, 10);
  //line(0.5 * zoom, -10, 0.5 * zoom, 10);
  line(1 * zoom, -10, 1 * zoom, 10);
  //line(1.5 * zoom, -10, 1.5 * zoom, 10);
  line(2 * zoom, -10, 2 * zoom, 10);

  //line(10, -0.5 * zoom, -10, -0.5 * zoom);
  line(10, -1 * zoom, -10, -1 * zoom);
  //line(10, -1.5 * zoom, -10, -1.5 * zoom);
  line(10, -2 * zoom, -10, -2 * zoom);
  //line(10, 0.5 * zoom, -10, 0.5 * zoom);
  line(10, 1 * zoom, -10, 1 * zoom);
  //line(10, 1.5 * zoom, -10, 1.5 * zoom);
  line(10, 2 * zoom, -10, 2 * zoom);
}

$(document).ready(() => {
  attachSliderEvents();
  attachButtonEvents();
})

function attachSliderEvents () {
  $("#crealslider").on("input", function() {
    let val = parseFloat($(this).val());
    creal = val;
    $("#crealvalue").text(val);
  })
  $("#cimagslider").on("input", function() {
    let val = parseFloat($(this).val());
    cimag = val;
    $("#cimagvalue").text(val);
  })
  $("#zoomslider").on("input", function() {
    let val = parseFloat($(this).val());
    zoom = val;
    $("#zoomvalue").text(val);
  })
}

function attachButtonEvents () {
  $("#startbutton").click(function() {
    running = !running;
    console.log(running);
  })
}
