let myImage;
let size;

const txt = [
  // 4:19
  "وَعَاشِرُوهُنَّ", "بِالْمَعْرُوفِ",
  // 2:228
  "وَلَهُنَّ", "مِثْلُ", "الَّذِي", "عَلَيْهِنَّ", "بِالْمَعْرُوفِ",
  // 4:1
  "يَا", "أَيُّهَا", "النَّاسُ", "اتَّقُوا", "رَبَّكُمُ", "الَّذِي", "خَلَقَكُم", "مِّن", "نَّفْسٍ", "وَاحِدَةٍ"
];

function preload() {
  myImage = loadImage("woman.jpg");
}

function setup() {
  createCanvas(500, 800);
  myImage.resize(150, 0);
  size = width / myImage.width;
  myImage.loadPixels();
  
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  textSize(size * 2);

  for (let i = 0; i < myImage.width; i++) {
    for (let j = 0; j < myImage.height; j++) {
      let pixelsIndex = (i + j * myImage.width) * 4;
      let r = myImage.pixels[pixelsIndex];
      let g = myImage.pixels[pixelsIndex + 1];
      let b = myImage.pixels[pixelsIndex + 2];
      let bright = (r + g + b) / 3;
      let tIndex = (i + j * myImage.width) % txt.length;

      
      let x = i * size + size / 2;
      let y = j * size + size / 2;

      
      let offset = (frameCount * 2 + j * 20) % (size * txt[tIndex].length);

      fill(bright * 3);
      
      drawingContext.save();
      drawingContext.beginPath();
      drawingContext.rect(i * size, j * size, size, size);
      drawingContext.clip();
      text(txt[tIndex], x - offset, y);
      drawingContext.restore();
    }
  }
}
