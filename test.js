var expect = require('chai').expect
var nock = require('nock')
var hello = require('./handler').hello

describe('hello', () => {
  it('respond with stuff', (done) => {
    hello(null, (err, result) => {
      expect(err).to.not.exist
      expect(result).to.have.property('text')
      scope.done()
      done()
    })
  })
})
