const formatFullName = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullName', () => {

    it('should return two strings with camele case', () => {
        expect(formatFullName('Amanda smith')).to.equal('Amanda Smith');
        expect(formatFullName('AMANDA SMITH')).to.equal('Amanda Smith');
        expect(formatFullName('amanda smith')).to.equal('Amanda Smith');
      });
})

describe('FormatFullName', () => {

    it('should return Error is the arg is empty', () => {
        expect(formatFullName('')).to.equal('Error');
      });
})

describe('FormatFullName', () => {

  it('should return Error is the arg is not a string', () => {
      expect(formatFullName(undefined)).to.equal('Error');
      expect(formatFullName([])).to.equal('Error');
      expect(formatFullName({})).to.equal('Error');
      expect(formatFullName(function() {})).to.equal('Error');
      expect(formatFullName(7)).to.equal('Error');
    });
})

describe('FormatFullName', () => {

  it('should return Error if arg is a string with no or more than one space', () => {
      expect(formatFullName('John')).to.equal('Error');
      expect(formatFullName('John More More')).to.equal('Error');

    });
})