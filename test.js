var expect = require('chai').expect
var nock = require('nock')
var hello = require('./handler').hello

describe('hello', () => {
  it('respond with stuff', (done) => {
    hello({"a":"b"}, null, (err, result) => {
      expect(err).to.not.exist
      result = JSON.parse(result.body);
      expect(result).to.have.property('text')
      done()
    })
  })
})
