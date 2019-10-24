// all the objects (3d models)
var world;

var overlayCanvas;

var computer;
var bed;
var lip;
var lamp;
var workingDesk;
var book;
var table;
var breakfast;
var consoleTable;
var blueTable;
var recordPlayer;
var rose;
//all the audio clips go to here
var lipSound;
var bedSound;
var bookSound;
var recordSound;
var eggSound;
var workSpaceSound;
var drawingDeskSound;
var soundPlayed = false;
var sounds;

//text goes here
var lipText;
var bookText;
var bedText;
var recordText;
var eggText;

function preload() {
  lipSound = loadSound('clips/lip_sound.m4a');
  bedSound = loadSound('clips/bed_sound.m4a');
  bookSound = loadSound('clips/book_sound.m4a');
  recordSound = loadSound('clips/record_sound.m4a');
  eggSound = loadSound('clips/egg_sound.m4a');
  coffeeSound = loadSound('clips/coffee_sound.m4a');
  workSpaceSound = loadSound('clips/workspace_sound.m4a');
  drawingDeskSound = loadSound('clips/drawing_sound.m4a')
};


function setup() {
  // no canvas needed in the sketch
  // noCanvas();
  sounds = [lipSound, bedSound, bookSound, recordSound, eggSound, coffeeSound, workSpaceSound, drawingDeskSound];
  // construct the A-Frame world
  // this function requires a reference to the ID of the 'a-scene' tag in our HTML document
  world = new World('VRScene');

  //wall and floor
  var basePlane = new Plane({
    x: 0,
    y: 0,
    z: 5,
    width: 10,
    height: 10,
    asset: 'floor',
    rotationX: -90,
    repeatX: 10,
    repeatY: 10
  });
  world.add(basePlane);

  var ceiling = new Plane({
    x: 0,
    y: 4,
    z: 5,
    width: 10,
    height: 10,
    asset: 'ceiling_tex',
    rotationX: -90,
    repeatX: 10,
    repeatY: 10,
    side: 'double'
  });
  world.add(ceiling);

  var frontWall = new Plane({
    x: 0,
    y: 2,
    z: 0,
    width: 10,
    height: 5,
    asset: 'wall',
    rotationX: 0,
    repeatX: 1,
    repeatY: 1
  });
  world.add(frontWall);

  var leftWall = new Plane({
    x: -2.5,
    y: 2,
    z: 5,
    width: 10,
    height: 5,
    asset: 'wall',
    rotationX: 0,
    rotationY: -90,
    rotationZ: 0,
    repeatX: 1,
    repeatY: 1,
    side: 'double'
  });
  world.add(leftWall);

  var rightWall = new Plane({
    x: 5,
    y: 2,
    z: 5,
    width: 10,
    height: 5,
    asset: 'wall',
    rotationX: 0,
    rotationY: -90,
    rotationZ: 0,
    repeatX: 1,
    repeatY: 1,
    side: 'double'
  });
  world.add(rightWall);

  var backWall = new Plane({
    x: 0,
    y: 2,
    z: 8,
    width: 10,
    height: 5,
    asset: 'wall',
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    repeatX: 1,
    repeatY: 1,
    side: 'double'
  });
  world.add(backWall);

  computer = new OBJ({
    asset: 'computer_obj',
    mtl: 'computer_tex',
    x: -1.5,
    y: 0.7,
    z: 5,
    scaleX: 3.5,
    scaleY: 3.5,
    scaleZ: 3.5,
    rotationY: -90

  });
  world.add(computer);

  bed = new OBJ({
    asset: 'bed_obj',
    mtl: 'bed_tex',
    x: -2.6,
    y: 0.6,
    z: 1.7,
    scaleX: 0.2,
    scaleY: 0.2,
    scaleZ: 0.2,
    rotationY: 90
  });
  world.add(bed);

  lip = new OBJ({
    asset: 'lip_obj',
    mtl: 'lip_tex',
    x: 0,
    y: 2,
    z: 0,
    scaleX: 2,
    scaleY: 2,
    scaleZ: 2,
    rotationY: 0
  });
  world.add(lip);

  lamp = new OBJ({
    asset: 'lamp_obj',
    mtl: 'lamp_tex',
    x: -2,
    y: 2.8,
    z: 3,
    scaleX: 0.5,
    scaleY: 0.5,
    scaleZ: 0.5
  });
  world.add(lamp);

  workingDesk = new OBJ({
    asset: 'workingDesk_obj',
    mtl: 'workingDesk_tex',
    x: -2.15,
    y: 1.35,
    z: 1.15,
    scaleX: 1.08,
    scaleY: 1.08,
    scaleZ: 1.08
  });
  world.add(workingDesk);

  book = new OBJ({
    asset: 'book_obj',
    mtl: 'book_tex',
    x: 0.8,
    y: 0.25,
    z: 1.6,
    scaleX: 1.8,
    scaleY: 1.8,
    scaleZ: 1.8,
    rotationY: -70
  });
  world.add(book);

  table = new OBJ({
    asset: 'table_obj',
    mtl: 'table_tex',
    x: -0.5,
    y: 0,
    z: 3,
    scaleX: 0.04,
    scaleY: 0.04,
    scaleZ: 0.04,
    rotationX: -90
  });
  world.add(table);

  breakfast = new OBJ({
    asset: 'breakfast_obj',
    mtl: 'breakfast_tex',
    x: -0.45,
    y: 0.9,
    z: 3.2,
    scaleX: 3.3,
    scaleY: 3.3,
    scaleZ: 3.3,
    rotationY: -90
  });
  world.add(breakfast);

  recordPlayer = new OBJ({
    asset: 'recordPlayer_obj',
    mtl: 'recordPlayer_tex',
    x: 4.2,
    y: 1.165,
    z: 4.7,
    scaleX: 1.5,
    scaleY: 1.5,
    scaleZ: 1.5,
    rotationY: -90
  });
  world.add(recordPlayer);

  blueTable = new OBJ({
    asset: 'blueTable_obj',
    mtl: 'blueTable_tex',
    x: 4.2,
    y: 0.6,
    z: 4.7,
    scaleX: 2.8,
    scaleY: 2.8,
    scaleZ: 2.8,
    rotationY: -90
  });
  world.add(blueTable);

  rose = new OBJ({
    asset: 'rose_obj',
    mtl: 'rose_tex',
    x: -2,
    y: 1.8,
    z: 7.4,
    scaleX: 0.8,
    scaleY: 0.8,
    scaleZ: 0.8,
    rotationY: -20
  });
  world.add(rose);

  drawingDesk = new OBJ({
    asset: 'drawingDesk_obj',
    mtl: 'drawingDesk_tex',
    x: 1.8,
    y: 1,
    z: 6.5,
    scaleX: 0.45,
    scaleY: 0.45,
    scaleZ: 0.45,
  });
  world.add(drawingDesk);


  //a collision that is placed on top of the lip object
  var lipCollision = new Box({
    x: 0.9,
    y: 2.3,
    z: 0.5,
    r: 255,
    g: 0,
    b: 0,
    scaleX: 1,
    scaleY: 0.7,
    scaleZ: 0.2,
    opacity: 0.01,
    clickFunction: function() {
      if (soundPlayed === false && lipSound.currentTime() == 0) {
        for (var i = 0; i < sounds.length; i++) {
          sounds[i].stop();
        }
        lipSound.play();
        lipText.show();
        soundPlayed = true;
      } else if (lipSound.isPlaying === false && lipSound.currentTime() == lipSound.duration()) {
        soundPlayed = false;
      }
      //if the sound isPlaying() == false and the duration is at the end

    }
  });
  world.add(lipCollision);

  var bookCollision = new Box({
    x: 1,
    y: 0.1,
    z: 1.5,
    r: 255,
    g: 0,
    b: 0,
    scaleX: 0.8,
    scaleY: 1.2,
    scaleZ: 1,
    opacity: 0.01,
    rotationY: 25,
    clickFunction: function() {
      if (soundPlayed === false && bookSound.currentTime() == 0) {
        for (var i = 0; i < sounds.length; i++) {
          sounds[i].stop();
        }
        bookSound.play();
        soundPlayed = true;
        bookText.show();
        //here we are saying two if stataments: if the sound is not playing and the soundfile's time is equal to the end
      } else if (bookSound.isPlaying === false && bookSound.currentTime() == bookSound.duration()) {
        soundPlayed = false;
      }

    }

  });
  world.add(bookCollision);

  var recordCollision = new Box({
    x: 4.2,
    y: 1.6,
    z: 4.7,
    r: 255,
    g: 0,
    b: 0,
    scaleX: 1,
    scaleY: 1.2,
    scaleZ: 1,
    opacity: 0.01,
    clickFunction: function() {
      if (soundPlayed === false && recordSound.currentTime() == 0) {
        for (var i = 0; i < sounds.length; i++) {
          sounds[i].stop();
        }
        recordSound.play();
        recordText.show();
        soundPlayed = true;

        //here we are saying two if stataments: if the sound is not playing and the soundfile's time is equal to the end
      } else if (recordSound.isPlaying === false && recordSound.currentTime() == recordSound.duration()) {
        soundPlayed = false;
      }
    }
  });
  world.add(recordCollision);

  var eggCollision = new Box({
    x: -0.3,
    y: 0.9,
    z: 3.05,
    r: 255,
    g: 0,
    b: 0,
    scaleX: 0.5,
    scaleY: 0.1,
    scaleZ: 0.5,
    opacity: 0.01,
    clickFunction: function() {
      if (soundPlayed === false && eggSound.currentTime() == 0) {
        for (var i = 0; i < sounds.length; i++) {
          sounds[i].stop();
        }
        eggSound.play();
        eggText.show();
        soundPlayed = true;
        //here we are saying two if stataments: if the sound is not playing and the soundfile's time is equal to the end
      } else if (eggSound.isPlaying === false && eggSound.currentTime() == eggSound.duration()) {
        soundPlayed = false;
      }
    }
  });
  world.add(eggCollision);

  var coffeeCollision = new Box({
    x: -0.575,
    y: 1,
    z: 2.6,
    r: 255,
    g: 0,
    b: 0,
    scaleX: 0.3,
    scaleY: 0.4,
    scaleZ: 0.3,
    opacity: 0.01,
    clickFunction: function() {
      if (soundPlayed === false && coffeeSound.currentTime() == 0) {
        for (var i = 0; i < sounds.length; i++) {
          sounds[i].stop();
        }
        coffeeSound.play();
        coffeeText.show();
        soundPlayed = true;
        //here we are saying two if stataments: if the sound is not playing and the soundfile's time is equal to the end
      } else if (coffeeSound.isPlaying === false && coffeeSound.currentTime() == coffeeSound.duration()) {
        soundPlayed = false;
      }
    }
  });
  world.add(coffeeCollision);


  //text object goes here
  lipText = new Text({
    x: 1.2,
    y: 1.5,
    z: 0.6,
    width: 6,
    value: 'every revolution starts and ends with his lips ',
    align: 'left',
    wrapCount: 12,
    visible: false,
    side: 'double',
    color: 'black',
    letterSpacing: 5
  });
  world.add(lipText);

  bookText = new Text({
    x: 0,
    y: 0.8,
    z: 1,
    rotationX: -45,
    rotationY: 30,
    width: 6,
    value: 'nothing is safer than the sound of you reading out loud to me ',
    align: 'left',
    wrapCount: 14,
    visible: false,
    side: 'double',
    color: 'black',
    letterSpacing: 5
  });
  world.add(bookText);

  bedText = new Text({
    x: 3.5,
    y: 2.5,
    z: 1.6,
    rotationX: 30,
    rotationY: -20,
    width: 6,
    value: 'you have spent enough nights with his manhood curled inside your legs to forget what loneliness feels like',
    align: 'left',
    wrapCount: 18,
    visible: false,
    side: 'double',
    color: 'black',
    letterSpacing: 5
  });
  world.add(bedText);

  recordText = new Text({
    x: 4,
    y: 2.8,
    z: 5,
    rotationX: 20,
    rotationY: -90,
    width: 6,
    value: 'i was music but you had your ears cut off',
    align: 'left',
    wrapCount: 14,
    visible: false,
    side: 'double',
    color: 'black',
    letterSpacing: 5
  });
  world.add(recordText);

  workspaceText = new Text({
    x: -1.7,
    y: 1.4,
    z: 1,
    rotationX: 25,
    rotationY: 90,
    width: 6,
    value: 'i will not have you build me into your life when what i want is to build a life with you',
    align: 'left',
    wrapCount: 14,
    visible: false,
    side: 'double',
    color: 'black',
    letterSpacing: 5
  });
  world.add(workspaceText);

  eggText = new Text({
    x: -0.5,
    y: 1.45,
    z: 3.2,
    width: 6,
    value: 'do not mistake salt for sugar if he wants to be with you he will its that simple',
    align: 'left',
    wrapCount: 18,
    visible: false,
    side: 'double',
    color: 'black',
    letterSpacing: 5,
    rotationX: 10,
    rotationY: 110
  });
  world.add(eggText);

  coffeeText = new Text({
    x: -0.5,
    y: 1.55,
    z: 2.3,
    width: 6,
    value: 'the next time you have your coffee black you will taste the bitter state he left you in it will make you weep but you will never stop drinking youd rather have the drakest parts of him than have nothing',
    align: 'left',
    wrapCount: 30,
    visible: false,
    side: 'double',
    color: 'black',
    letterSpacing: 5,
    rotationX: 10,
    rotationY: 50
  });
  world.add(coffeeText);

  canvasText = new Text({
    x: 2,
    y: 2.6,
    z: 7,
    rotationX: 20,
    rotationY: -180,
    width: 6,
    value: 'the very thought of you has my legs spread apart like an easel with a canvas beggining for art',
    align: 'left',
    wrapCount: 18,
    visible: false,
    side: 'double',
    color: 'black',
    letterSpacing: 5
  });
  world.add(canvasText);


  //all the movement collider goes here
  var slideBookPlane = new Plane({
    x: 1,
    y: 0.8,
    z: 3,
    rotationX: -90,
    width: 1,
    height: 1,
    // depth: 0.1,
    opacity: 0.01
    // clickFunction() {
    //   world.slideToObject(slidePlane, 2000);
    // }
  });
  world.add(slideBookPlane);

  var slideToBook = new Box({
    x: 1,
    y: -0.49,
    z: 3,
    width: 0.5,
    // height: 0.1,
    depth: 0.5,
    opacity: 0.5,
    clickFunction() {
      world.slideToObject(slideBookPlane, 2000);
    }
  });
  world.add(slideToBook);

  var slideBedPlane = new Plane({
    x: 2.5,
    y: 1,
    z: 3.5,
    rotationX: -90,
    width: 0.5,
    height: 0.5,
    // depth: 0.1,
    opacity: 0.01
    // clickFunction() {
    //   world.slideToObject(slidePlane, 2000);
    // }
  });
  world.add(slideBedPlane);

  var slideToBed = new Box({
    x: 2.5,
    y: -0.49,
    z: 3.5,
    width: 0.5,
    // height: 0.1,
    depth: 0.5,
    opacity: 0.7,
    clickFunction() {
      world.slideToObject(slideBedPlane, 2000);
    }
  });
  world.add(slideToBed);
  //
  // var slideWorkSpacePlane = new Plane({
  //   x: -0.8,
  //   y: 1,
  //   z: 1.3,
  //   rotationX: -90,
  //   width: 1,
  //   height: 1,
  //   // depth: 0.1,
  //   opacity: 0.01
  // });
  // world.add(slideWorkSpacePlane);
  //
  // var slideToWorkspace = new Box({
  //   x: -0.8,
  //   y: -0.49,
  //   z: 1.3,
  //   width: 0.5,
  //   // height: 0.1,
  //   depth: 0.5,
  //   opacity: 0.7,
  //   clickFunction() {
  //     world.slideToObject(slideWorkSpacePlane, 2000);
  //   }
  // });
  // world.add(slideToWorkspace);


  var slideWorkSpaceMiddlePlane = new Plane({
    x: -0.8,
    y: 1,
    z: 1.3,
    rotationX: -90,
    width: 1,
    height: 1,
    // depth: 0.1,
    opacity: 0.001
    // clickFunction() {
    //   world.slideToObject(slidePlane, 2000);
    // }
  });
  world.add(slideWorkSpaceMiddlePlane);

  var slideToWorkspaceMiddle = new Box({
    x: -0.8,
    y: -0.49,
    z: 1.3,
    width: 0.8,
    // height: 0.1,
    depth: 0.8,
    opacity: 0.7,
    clickFunction() {
      world.slideToObject(slideWorkSpaceMiddlePlane, 2000);
    }
  });
  world.add(slideToWorkspaceMiddle);

  var slideTablePlane = new Box({
    x: 0.2,
    y: 1,
    z: 3.2,
    rotationX: -90,
    width: 1,
    height: 1,
    // depth: 0.1,
    opacity: 0.01
  });
  world.add(slideTablePlane);

  var slideToTable = new Box({
    x: 0.2,
    y: -0.49,
    z: 3.2,
    width: 0.5,
    // height: 0.5,
    depth: 0.5,
    opacity: 0.9,
    clickFunction() {
      world.slideToObject(slideTablePlane, 2000);
    }
  });
  world.add(slideToTable);


};

function draw() {
  var userPos = world.getUserPosition();
  // console.log("x:" + userPos.x);
  // console.log("z:" + userPos.z);

  // create the bed sound trigger
  //remember to add currentTime == 0 to make sound play once a time
  if (userPos.z < 4 && userPos.z > 0 && userPos.x < 5 && userPos.x > 2 && soundPlayed === false && bedSound.currentTime() == 0) {
    for (var i = 0; i < sounds.length; i++) {
      sounds[i].stop();
    }
    bedSound.play();
    bedText.show();
    soundPlayed = true;
    // console.log(soundPlayed);
  } else if (soundPlayed === true && (userPos.z >= 4 || userPos.z <= 0 || userPos.x >= 5 || userPos.x <= 2)) {
    // bedSound.stop();
    soundPlayed = false;
  }

  // create the workspace sound trigger
  if (userPos.z < 1.5 && userPos.z > 0.3 && userPos.x < -0.8 && userPos.x > -2 && soundPlayed === false && workSpaceSound.currentTime() == 0) {
    for (var i = 0; i < sounds.length; i++) {
      sounds[i].stop();
    }
    workSpaceSound.play();
    workspaceText.show();
    soundPlayed = true;
    // console.log(soundPlayed);
  } else if (soundPlayed === true && (userPos.z >= 1.5 || userPos.z <= 0.3 || userPos.x >= -0.8 || userPos.x <= -2)) {
    // bedSound.stop();
    soundPlayed = false;
  }

  // drawing desk
  if (userPos.z < 8 && userPos.z > 5.9 && userPos.x < 2.9 && userPos.x > 1.4 && soundPlayed === false && drawingDeskSound.currentTime() == 0) {
    for (var i = 0; i < sounds.length; i++) {
      sounds[i].stop();
    }
    drawingDeskSound.play();
    canvasText.show();
    soundPlayed = true;
    // console.log(soundPlayed);
  } else if (soundPlayed === true && (userPos.z >= 8 || userPos.z <= 5.9 || userPos.x >= 2.9 || userPos.x <= 1.4)) {
    // bedSound.stop();
    soundPlayed = false;
  }

};