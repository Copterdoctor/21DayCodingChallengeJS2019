
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


module.exports = {
  navigation,
  radio,
  ship,
  powerOn,
  countModules,
  countEssential,
  findModuleIndex,
  loadModule
}