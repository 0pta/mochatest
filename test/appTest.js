const assert = require('chai').assert
//const sayHello = require('../app').sayHello
//const addNumbers = require('../app').addNumbers
const app = require('../app')

// Results
sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(5, 5)
flattenArrResult = app.flattenArr([[1],[2],[3]])
sortArrResult = app.sortArr([47, 7, 69, 77, 11, 67, 82, 29])

describe('App', () => {
  describe('sayHello()', () => {
    it('sayHello should return hello', () => {
      //let result = app.sayHello()
      assert.equal(sayHelloResult, 'hello')
    })

    it('sayHello should return type string', () => {
      //let result = app.sayHello()
      assert.typeOf(sayHelloResult, 'string')
    })
  })

  describe('addNumbers()', () => {
    it('addNumbers should be above 5', () => {
      //let result = app.addNumbers(5,5)
      assert.isAbove(addNumbersResult, 5)
    })

    it('addNumbers should return type number', () => {
      //let result = app.addNumbers(5,5)
      assert.typeOf(addNumbersResult, 'number')
    })
  })


  // Test Driving. I built these tests before building functions in app.js.
  describe('flattenArr()', () => {
    it('flattenArr should return a flattened array', () => {
      assert.deepEqual(flattenArrResult, [1, 2, 3])
    })

    it('flattenArr should return type array', () => {
      assert.typeOf(flattenArrResult, 'array')
    })
  })

  describe('sortArr()', () => {
    it('sortArr should return a sorted array', () => {
      assert.deepEqual(sortArrResult, [7, 11, 29, 47, 67, 69, 77, 82])
    })

    it('sortArr should return type array', () => {
      assert.typeOf(sortArrResult, 'array')
    })
  })
})
