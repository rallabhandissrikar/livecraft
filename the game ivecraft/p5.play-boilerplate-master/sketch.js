var steve;
var cow;
var pig;
var sheep;
var position;
var blocksGrp;
var grass;
var grnd;
var pl_right;
var pl_left;
var pl_run_left;
var pl_run_right;
var stone;
var gravel;
var tr;
var blocksGrp2;
var ices;
var grassBlocks;
var count;
function preload() {
  grass = loadImage("terrain/dirt.png");
  pl_right = loadImage("player/right.png");
  pl_left = loadImage("player/left.png");
  pl_run_right = loadImage("player/steveRunning.png");
  pl_run_left = loadImage("player/steveRunningLeft.png");
  grnd = loadImage("terrain/ground.png");
  stone = loadImage("terrain/Cbstone.png");
  gravel = loadImage("terrain/gravel.png");
  diamond = loadImage("terrain/diamond.png");
  ices = loadImage("terrain/iceblocks.png");
}

function setup() {
  createCanvas(1400, 1400);
  steve = createSprite(400, 200, 40, 80);
  steve.addImage(pl_right);
  blocksGrp = createGroup();
  blocksGrp2 = createGroup();
  
}

function draw() {
  background(255, 255, 255);
  terrain();
  for (var i = 0; i < count; i++) {
    if (mousePressedOver(blocksGrp.get(i))) {
      blocksGrp.get(i).destroy();
    }
  }
  if (keyDown(RIGHT_ARROW)) {
    changePosition(+20);
    tr = "right"
  }

  
  if (keyDown(LEFT_ARROW)) {
    changePosition(-20);
    tr = "left"
  }

  if (keyDown(RIGHT_ARROW) || keyDown(LEFT_ARROW)) {
    if (tr === "left") {
      turn("run_left");
    }
    if (tr === "right") {
      turn("run_right");
    }
  } else {
    if (tr === "left") {
      turn("left")
    }
    if (tr === "right") {
      turn("right");
    }
  }

  // if (mouseIsOver(grassBlocks)) {
  //   num = blocksGrp.get()
  // }

  camera.position.x = steve.x;


  if (keyWentDown(UP_ARROW) && steve.y > 523) {
    steve.y -= 40;
  }


  steve.collide(blocksGrp);
  steve.collide(blocksGrp2);
  steve.velocityY = steve.velocityY + 1;
  drawSprites();
}


function changePosition(x) {
  steve.x = steve.x + x;
}

function terrain() {
  for (var x = -240; x <= 1700; x = x + 40) {
    grassBlocks = createSprite(x, 620, 40, 40);
    count++;
    grassBlocks.addImage(grass);
    blocksGrp.add(grassBlocks);
  }

  for (var x = -240; x <= 1700; x += 40) {
    for (var y = 660; y <= 800; y += 40) {
      var dirtblock = createSprite(x, y, 40, 40);
      dirtblock.addImage(grnd);
      blocksGrp.add(dirtblock);
    }
  }

  for (var x = -240; x <= 1700; x += 40) {
    for (var y = 820; y <= 1000; y += 40) {
      var stones = createSprite(x, y, 40, 40);
      stones.addImage(stone);
      blocksGrp.add(stones);
    }
  }
  for (var x = -240; x <= 1700; x += 40) {
    for (var y = 1020; y <= 1200; y += 40) {
      var gravels = createSprite(x, y, 40, 40);
      gravels.addImage(gravel);
      blocksGrp.add(gravels);
    }
  }

  for (var x = -240; x <= 1700; x += 40) {
    for (var y = 1220; y <= 1400; y += 40) {
      var diamonds = createSprite(x, y, 40, 40);
      diamonds.addImage(diamond);
      blocksGrp.add(diamonds);
    }
  }

  for (var x = -1520; x <= -280; x += 40) {
    for (var y = 620; y <= 1000; y += 40) {
      var ice = createSprite(x, y, 40, 40);
      ice.addImage(ices);
      blocksGrp2.add(ice)
    }
  }

  for (var x = -1520; x <= -280; x += 40) {
    for (var y = 1020; y <= 2000; y += 40) {
      var ice = createSprite(x, y, 40, 40);
      ice.addImage(grnd);
      blocksGrp2.add(ice);
    }
  }

}
function turn(turn) {
  if (turn === "left") {
    steve.addImage(pl_left)
  } else if (turn === "right") {
    steve.addImage(pl_right);
  } else if (turn === "run_right") {
    steve.addImage(pl_run_right);
  } else if (turn === "run_left") {
    steve.addImage(pl_run_left);
  }
}