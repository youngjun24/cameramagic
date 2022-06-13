let imgs = [];
let capture;
let clickedNumber = 0;
function preload() {
  for (let i=0; i<10; i++) {
    let t = loadImage("S/s"+i+".png");
    imgs.push(t); //0~9
  }
  
  for (let i=0; i<10; i++) {
    let m = loadImage("M/m"+i+".png");
    imgs.push(m); //10~19 (+10)
  }
  
  for (let i=0; i<10; i++) {
    let f = loadImage("F/f"+i+".png");
    imgs.push(f); //20~29 (+20)
  }
  
  for (let i=0; i<10; i++) {
    let w = loadImage("W/w"+i+".png");
    imgs.push(w); //30~39 (+30)
  }
}
function mouseReleased() {
  clickedNumber = clickedNumber + 1;
  if (clickedNumber>=4) {
    clickedNumber = 0;
  }
}
  
function setup() {
  createCanvas(800, 600);
  capture = createCapture(VIDEO);
  capture.size(160, 120);
}
function draw() {
  background(245);
  noStroke();
  capture.loadPixels();
  for (let y=0; y<capture.height; y=y+3) {
    for (let x=0; x<capture.width; x=x+3) {
      let idx = x + y * capture.width;
      let r = capture.pixels[idx*4];
      let g = capture.pixels[idx*4 + 1];
      let b = capture.pixels[idx*4 + 2];
      let gr = (r + g + b)/3.0; //0~255
      let gri = parseInt(gr/26.0) + clickedNumber*10;
      rect(x*10, y*10, 10, 10);
      image(imgs[gri], x*5, y*5, 15, 15)
    }
  }
}