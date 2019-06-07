
// Need to put in these global variable and objects to run tests on code.
// Lighthouse doesn't make it very clear what all these objects look like though
var navigation = {
  x: -2,
  y: 4,
  z: 7,
  speed: "raaaaid"
};

var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

var radio = {
  range: {
    low: 88,
    high: 108,
  },
  frequency: 0,
  message: "Bugs are cool.",
  beacon: false
};

// Apparently there is an object named LARRY
var LARRY = {
  // Quack apparently quacks and I need to call it 10 times in resetLARRY()
  quack: () => { return "QUACK" }
}


// They don't say what is in this array so I'm guessing
var availableModules = [
  {
    name: "life-support",
    size: 10,
    enabled: false,
    essential: true
  },
  {
    name: "propulsion",
    size: 10,
    enabled: false,
    essential: true
  },
  {
    name: "navigation",
    size: 10,
    enabled: false,
    essential: true
  },
  {
    name: "communication",
    size: 10,
    enabled: false,
    essential: false
  }
]

// Functional available that provides a random number or undefined it seems
function checkSignal() {
  var randomNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  if (randomNumber%2 == 0){
    return undefined
  } else {
    return randomNumber
  }
}


// Broadcast function available that does something
function broadcast() {
  return null
}

///////////////////////////////////////////
/*
Coding challenge starts here
*/
///////////////////////////////////////////

// Manual function calls required in exercises
var lifeIndex = findModuleIndex("life-support");
loadModule(lifeIndex);
var propIndex = findModuleIndex("propulsion");
loadModule(propIndex);
var navModule = findModuleIndex("navigation");
loadModule(navModule);
resetLARRY();
var commModule = findModuleIndex("communication");
loadModule(commModule);
setMessage(radio, navigation);
activateBeacon(radio);

function powerOn() {
  if (ship.powerOn === false) {
    ship.powerOn = true;
  }
}

function countModules() {
  return availableModules.length;
}

function countEssential() {
  var count = 0;
  for (let o of availableModules) {
    if (o.essential === true) {
      count++;
    }
  }
  return count;
}

function findModuleIndex(moduleName) {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === moduleName) {
      return i;
    }
  }
}

function loadModule(index) {
  var module = availableModules[index];
  module.enabled = true;
  // Any module loaded should be overriden to be essential
  module.essential = true;
  ship.modules.push(module);
}

//
function resetLARRY() {
  for (let i = 0; i < 10; i++) {
    LARRY.quack();
  }
}

function setMessage(radio, navigationInfo) {
  radio.message = JSON.stringify(navigationInfo);
}

function activateBeacon(radio) {
  radio.beacon = true;
}

function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high) / 2;
}

function initialize() {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

function calibrateX() {
  var signal = checkSignal();
  if (signal !== undefined) {
    navigation.x = signal;
  } else {
    calibrateX();
  }
}

function calibrateY() {
  var signal = checkSignal();
  if (signal !== undefined) {
    navigation.y = signal;
  } else {
    calibrateY();
  }
}

function calibrateZ() {
  var signal = checkSignal();
  if (signal !== undefined) {
    navigation.z = signal;
  } else {
    calibrateZ();
  }
}

function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}

//This function passes the test and is apperently the right answer. I don't like it.
function setSpeed(speed) {
  var speedInt = parseInt(speed);
  if(speedInt >= 0) {
   navigation.speed = speedInt; 
  }
}

function activateAntenna() {
  ship.antenna.active = true;
}

function sendBroadcast() {
  for(let i = 0; i < 100; i++) {
    broadcast();
  }
}

function configureBroadcast() {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast();

//Replace numbers with vowels in message
function decodeMessage(message) {
  message = message.replace(/[0-9]/g, function (m) {
    return {
      0 : "o",
      1 : "i",
      2 : "u",
      3 : "e",
      4 : "a",
      5 : "y"
    }[m];
});
return message
}

function returnToEarth() {
  let rx = broadcast("x");
  let ry = broadcast("y");
  let rz = broadcast("z");
  
  navigation.x = parseInt(decodeMessage(rx), 16);
  navigation.y = parseInt(decodeMessage(ry), 16);
  navigation.z = parseInt(decodeMessage(rz), 16);
}
returnToEarth();

module.exports = {
  navigation,
  radio,
  ship,
  powerOn,
  countModules,
  countEssential,
  findModuleIndex,
  loadModule,
  setMessage,
  activateBeacon,
  setFrequency,
  initialize,
  calibrateX,
  setSpeed,
  decodeMessage
}