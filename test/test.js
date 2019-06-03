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