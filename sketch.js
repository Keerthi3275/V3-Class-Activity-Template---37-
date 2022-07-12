var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() 
{
  backgroundImage = loadImage("assets/background.png");
 //Load Car & Track Image
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
}
function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  //Call game class getState()
  game.getState();
 
}

function draw() {
  background(backgroundImage);
  //Update the gamestate depending upon playercount
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
