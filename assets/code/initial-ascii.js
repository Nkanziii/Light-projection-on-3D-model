let myImage;
let size;
const txt = [
  "وَعَاشِرُوهُنَّ",
  "بِالْمَعْرُوفِ"
];

function preload() {
  myImage = loadImage("woman.jpg");
}

function setup() {
  createCanvas(500, 750);
  myImage.resize(50, 0);
  size = width / myImage.width;
  noLoop();
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  
  

  for (let i = 0; i < myImage.width; i++) {
    for (let j = 0; j < myImage.height; j++) {
      let pixelVal = myImage.get(i, j);
      let c = brightness(pixelVal);
      let tIndex = floor(map(c, 0, 100, 0, txt.length));

      let x = i * size + size/2;
      let y = j * size + size/2;
      let t = txt[tIndex]; //picking the arabic writing
      
      textSize(size * 0.4);
      fill(c * 3);
      text(txt[tIndex], x, y);
    }
  }
}
