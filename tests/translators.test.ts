import { dlManelToUnicode, singlishToUnicode } from "../src/translators"
import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('My math library', () => {

    it('should be able to add things correctly', () => {
        expect(dlManelToUnicode("wdKavql%u jHjia:dj")).to.equal("ආණ්ඩුක්‍රම ව්‍යවස්ථාව")
        expect(singlishToUnicode("shrii la\\nkaa")).to.equal("ශ්‍රී ලංකා");
    });

});


// console.log(kaputaToUnicode("a`N~dEkYm v&vs~}`v"))
// console.log(fmAbayaToUnicode("wdKavql%u jHjia:dj"))