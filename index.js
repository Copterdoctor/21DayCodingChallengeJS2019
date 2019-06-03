

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

var availableModules = [
  {name: "life-support",
  size: 10,
  enabled: false,
  essential: true},
  {name: "propulsion",
  size: 10,
  enabled: false,
  essential: true}
]


var lifeIndex = findModuleIndex("life-support");
loadModule(lifeIndex);
var propIndex = findModuleIndex("propulsion");
loadModule(propIndex);


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
  ship.modules.push(module);
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