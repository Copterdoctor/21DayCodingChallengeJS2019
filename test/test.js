const assert = require("chai").assert;
const expect = require("chai").expect;
const app = require("../index");

describe("Ship Power", () => {
  it("Should turn on", () => {
    app.powerOn();
    assert.equal(app.ship.powerOn, true)
  })
})

describe("Number of modules", () => {
  it("There should be 4 modules", () => {
    var count = app.countModules()
    assert.equal(count, 4)
  })
})

describe("Number of essential modules", () => {
  it("There should be 4 modules", () => {
    var count = app.countEssential()
    assert.equal(count, 4)
  })
})

describe("Find life-support module index", () => {
  it("Index should be 0", () => {
    var index = app.findModuleIndex("life-support")
    assert.equal(index, 0)
  })
})

describe("Loaded communication module should be made essential", () => {
  it("communication module should be essential", () => {
    assert.equal(app.ship.modules[3].essential, true)
  })
})

describe("Radio message set with navigation info", () => {
  it("Should be a JSON String of navigation object", () => {
    app.setMessage(app.radio, app.navigation)
    assert.equal(app.radio.message, JSON.stringify(app.navigation))
    console.log(app.radio.message);
  })
})

describe("Radio frequency set", () => {
  it("Should be (Radio.range.low + ..high) / 2", () => {
    var low = app.radio.range.low
    var high = app.radio.range.high
    let freq = (low + high) / 2
    app.setFrequency(app.radio)
    assert.equal(app.radio.frequency, freq)
    console.log(app.radio.frequency);
  })
})

describe("Initialize navigation system", () => {
  it("Should set coords to 0,0,0", () => {
    app.initialize()
    assert.equal(app.navigation.x, 0)
    assert.equal(app.navigation.y, 0)
    assert.equal(app.navigation.z, 0)
  })
})

describe("Calibrate X coord", () => {
  it("Navigation.X should not be undefined", () => {
    app.calibrateX()
    assert.notEqual(app.navigation.x, undefined)
  })
})

describe("Set speed of Navigation", () => {
  it("Should be a Non Negative Int", () => {
    app.setSpeed("10")
    assert.equal(app.navigation.speed, 10)
  })
})

describe("Decode message", () => {
  it("Should replace numbers with letters in map", () => {
    let codedMessage = "th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l."
    var decoded = app.decodeMessage(codedMessage)
    assert.equal(decoded, "this is a test. this is only a test. if this were a real message, you wouid get something meaningful.")
  })
})