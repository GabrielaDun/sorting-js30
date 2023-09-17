const cutText = require('../cutText.js');
const expect = require('chai').expect;

describe('CutText', () => {

    it('should return an error if "content" arg is not a string', () => {
        expect(cutText(undefined, 20)).to.equal('Error');
        expect(cutText(12, 20)).to.equal('Error');
        expect(cutText({}, 20)).to.equal('Error');
        expect(cutText([], 20)).to.equal('Error');
        expect(cutText(function() {}, 20)).to.equal('Error');
      });
})

describe('CutText', () => {

    it('should return an error if the length of "content" equals 0', () => {
        expect(cutText(0, 20)).to.equal('Error');
      });
})

describe('CutText', () => {

    it('should return an error if "MaxLength" is not a number ', () => {
        expect(cutText(5, {})).to.equal('Error');
        expect(cutText(5, [])).to.equal('Error');
        expect(cutText(5, 'str')).to.equal('Error');
        expect(cutText(5, undefined)).to.equal('Error');
        expect(cutText(5, function() {})).to.equal('Error');
      });
})

describe('CutText', () => {

    it('should return an error if "MaxLength" equals or is smaller than 0 ', () => {
        expect(cutText(5, 0)).to.equal('Error');
        expect(cutText(5, -7)).to.equal('Error');
      });
})

describe('CutText', () => {

    it('should return "content" if "content" and "MaxLength" are correct and "MaxLengh" is equal or bigger than "content.length" ', () => {
        expect(cutText('Lorem', 9)).to.equal('Lorem');
        expect(cutText('Lorem', 5)).to.equal('Lorem');
      });
})

describe('CutText', () => {

    it('should return text cut by maxLength number of symbols if content and maxLength are correct and maxLength is bigger or equals content.length, unless the cut would be in the middle of the word, then the cut should occur before the word', () => {
        expect(cutText('Lorem ipsum', 3)).to.equal('...');
        expect(cutText('Lorem ipsum', 5)).to.equal('Lorem...');
      });
})

describe('CutText', () => {

    it('should return "..." in the end if the content and maxLength are correct and maxLength is smaller than content.length', () => {
        expect(cutText('Lorem ipsum bu', 13)).to.equal('Lorem ipsum...');
        expect(cutText('Lorem ipsum bu', 5)).to.equal('Lorem...');
      });
})