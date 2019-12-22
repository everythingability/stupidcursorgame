var img
var imgW, imgH
var tintValue = 255;
var bgColor = "gray"
var snd
var isPlaying = false
var score = 50
var font
var uhOh
var uhOhIsPlaying = false

function preload() {
  img = loadImage("Cursor.png")
  snd = loadSound("bzz.wav")
  uhOh = loadSound("uh_oh.wav")
  font = loadFont("Franklin Gothic Heavy Italic.ttf")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //img.resize( windowWidth * 0.8, windowHeight * 0.8)
  imgW = img.width
  imgH = img.height
  textFont(font)
  textSize(240)
  textAlign(CENTER, CENTER)
  imageMode(CENTER)



}

function touchStarted() {
  score = 49
  uhOhIsPlaying = false
    noCursor();
  print("Touched", getAudioContext().state)
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}

function mousePressed() {
  score = 49
    noCursor();
  uhOhIsPlaying = false
  print("Clicked", getAudioContext().state)
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}

function draw() {
  if (score == 50) {
    background("green")
    fill("white")
    text("CLICK!", width / 2, height / 2)

  } else {
    if (score > 0) {
      if (mouseX - imgW / 2 > 0 & mouseY - imgH / 2 > 0 & mouseX < width - imgW / 2 & mouseY < height - imgH / 2) { //topleft
        bgColor = "gray"
        isPlaying = false
        snd.stop()
        background(bgColor);
        tintValue = 255
        tint(255, tintValue)
        image(img, mouseX, mouseY)
      } else {
        tintValue -= 10

        if (tintValue < 10) {
          tintValue = 10
        }
        if (isPlaying == false) {
          isPlaying == true
          snd.loop()
        }
        bgColor = "yellow"
        background(bgColor);
        print(score)
        tint(255, tintValue)

        image(img, mouseX, mouseY)
        score--
      }
    } else {
      snd.stop()
      cursor(ARROW)

      background("red")
      fill("white")
      text("YOU LOSER!", width / 2, height / 2)
      if (uhOhIsPlaying == false) {
        uhOh.play()
        uhOhIsPlaying = true
      }
    }
  }

}
