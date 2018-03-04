// Added volumn control

var freqA = 261;
var freqS = 293;
var freqD = 329;
var freqF = 349;
var freqG = 392;
var freqH = 440;
var freqJ = 494;
var freqK = 523;

var oscA, oscS, oscD, oscF, oscG, oscH, oscJ, oscK;

var x = [];
var y = [];
var d = [];
var v = 50;
var playing = false;

function setup() {
  createCanvas (500, 500);
  backgroundColor = color(235, 250, 255);
  textAlign(CENTER);
	
	slider = createSlider(0, 100, v);
  slider.position(10, 10);
  slider.style('width', '460px');
  
  for (var i = 0; i < 50; i++){
    x[i] = random(500);
    y[i] = random(100, 200);
    d[i] = random(40);
    color[i] = color(random(80, 180), random(150, 220), random(200, 230), 90);
}
  
  oscA = new p5.Oscillator();
  oscA.setType('piano');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  
  oscS = new p5.Oscillator();
  oscS.setType('piano');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('piano');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('piano');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
	
	oscG = new p5.Oscillator();
  oscG.setType('piano');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscH = new p5.Oscillator();
  oscH.setType('piano');
  oscH.freq(freqH);
  oscH.amp(0);
  oscH.start();
  
  oscJ = new p5.Oscillator();
  oscJ.setType('piano');
  oscJ.freq(freqJ);
  oscJ.amp(0);
  oscJ.start();
  
  oscK = new p5.Oscillator();
  oscK.setType('piano');
  oscK.freq(freqK);
  oscK.amp(0);
  oscK.start();
}

function draw() {
  if (playing) {
  } else {
    background(235, 250, 255);
		stroke(120)
		strokeWeight(5)
		line (0, 100, 500, 100);
		line (0, 120, 500, 120);
		line (0, 140, 500, 140);
		line (0, 160, 500, 160);
		line (0, 180, 500, 180);

    
    fill(255);
    rect(5, 300, 60, 195);//A, DO
    rect(65, 300, 60, 195);//S, RE
    rect(125, 300, 60, 195);//D, MI
    rect(185, 300, 60, 195);//F, FA
    rect(245, 300, 60, 195);//G, SOL
    rect(305, 300, 60, 195);//H, LA
    rect(365, 300, 60, 195);//J, SI
    rect(425, 300, 60, 195);//K, DO^
    rect(485, 300, 60, 195);
    fill(0);
    rect(-10, 300, 30, 100);
    rect(50, 300, 30, 100);
    rect(110, 300, 30, 100);
    rect(170, 300, 30, 100);
    rect(230, 300, 30, 100);
    rect(290, 300, 30, 100);
    rect(350, 300, 30, 100);
    rect(410, 300, 30, 100);
    rect(470, 300, 30, 100);
  }
}

function keyPressed() {
    for (var i = 0; i < 50; i++){
    fill(color[i]);
    noStroke();
    ellipse(x[i], y[i], d[i]);
  if (random() < 100){
    d[i] = random(10, 40);
  }
}
	noStroke();
	fill (0)
  text('NOW YOU SEE ME', width / 2, 40);
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    noStroke()
		fill (110, 220, 255)
    ellipse (50, 200, 20, 20);
		stroke(110, 220, 255)
		strokeWeight (5)
		line (35, 200, 65, 200);
		line (60, 140, 60, 200);
    stroke(120);
    fill (240);
    rect(5, 300, 60, 195);
  } else if (key == 'S') {
    osc = oscS;
    noStroke()
		fill (0, 157, 255)
    ellipse (100, 190, 20, 20);
		stroke(0, 157, 255)
		strokeWeight (5)
		line (110, 130, 110, 190);
    stroke(120);
    fill (240);
    rect(65, 300, 60, 195);
  } else if (key == 'D') {
    osc = oscD;
    noStroke()
		fill (0, 123, 163)
    ellipse (150, 180, 20, 20);
		stroke(0, 123, 163)
		strokeWeight (5)
		line (160, 120, 160, 180);
    stroke(120);
    fill (240);
    rect(125, 300, 60, 195);
  } else if (key == 'F') {
    osc = oscF;
    noStroke()
		fill (0, 71, 94)
    ellipse (200, 170, 20, 20);
		stroke(0, 71, 94)
		strokeWeight (5)
		line (210, 110, 210, 170);
    stroke(120);
    fill (240);
    rect(185, 300, 60, 195);
	} else if (key == 'G') {
    osc = oscG;
    noStroke()
		fill (0, 45, 45)
    ellipse (250, 160, 20, 20);
		stroke(0, 45, 45)
		strokeWeight (5)
		line (260, 100, 260, 160);
    stroke(120);
    fill (240);
		rect(245, 300, 60, 195);
  } else if (key == 'H') {
    osc = oscH;
    noStroke()
		fill (0, 45, 45)
    ellipse (300, 150, 20, 20);
		stroke(0, 45, 45)
		strokeWeight (5)
		line (310, 90, 310, 150);
    stroke(120);
    fill (240);
  	rect(305, 300, 60, 195);
  } else if (key == 'J') {
    osc = oscJ;
    noStroke()
		fill (0, 45, 45)
    ellipse (350, 140, 20, 20);
		stroke(0, 45, 45)
		strokeWeight (5)
		line (360, 80, 360, 140);
    stroke(120);
    fill (240);
    rect(365, 300, 60, 195);
  }  else if (key == 'K') {
    osc = oscK;
    noStroke()
		fill (0, 45, 45)
    ellipse (400, 130, 20, 20);
		stroke(0, 45, 45)
		strokeWeight (5)
		line (410, 70, 410, 130);
    stroke(120);
    fill (240);
    rect(425, 300, 60, 195);
  }
  
fill(0);
rect(-10, 300, 30, 100);
rect(50, 300, 30, 100);
rect(110, 300, 30, 100);
rect(170, 300, 30, 100);
rect(230, 300, 30, 100);
rect(290, 300, 30, 100);
rect(350, 300, 30, 100);
rect(410, 300, 30, 100);
rect(470, 300, 30, 100);
  

if (osc) {
  osc.amp(slider.value()/1000, slider.value()/1000);
  playing = true;
}
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  } else if (key == 'G') {
    osc = oscG;
  } else if (key == 'H') {
    osc = oscH;
  } else if (key == 'J') {
    osc = oscJ;
  } else if (key == 'K') {
    osc = oscK;
  } 
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
