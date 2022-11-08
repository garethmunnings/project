let angle = 0;
let w = 32;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL); 
  ma = atan(sqrt(1/sqrt(2))); 
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(255);
  ortho(-400, 400, -400, 400, 0, 1000);
  ambientLight(255, 255, 255, 0, -1, 0);


  //translate(0, 25, -50);
  

  rotateX(-ma);
  rotateY(PI/4);

  let offset = 0;
  for(let z = 0; z < height; z+=w) {
    for(let x = 0; x < width; x+=w) {
    push();
    
    let d = dist(x, z, width/2, height/2);
    offset = map(d, 0, maxD, -3, 3);
    let a = angle + offset;
    let h = floor(map(sin(a), -1, 1, 100, 300));
    
    translate(x - width/2, 0, z - height/2);
    normalMaterial();
    box(w, h, w);

    
    pop();
  } 
  
}

  angle -= 0.08;
}
