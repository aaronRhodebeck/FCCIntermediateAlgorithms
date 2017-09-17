/******************************************************** 
 * Tests for Intermediate Algorithms for Free Code Camp
 *********************************************************/

describe("Sum of Numbers in Range", function() {
    it("should return a number", function() {
        expect(sumAll([1, 4])).toEqual(jasmine.any(Number));
    });
    it("sumAll([1, 4]) should return 10", function() {
        expect(sumAll([1, 4])).toBe(10);
    });
    it("sumAll([4, 1]) should return 10", function() {
        expect(sumAll([4, 1])).toBe(10);
    });
    it("sumAll([5, 10]) should return 45", function() {
        expect(sumAll([5, 10])).toBe(45);
    });
    it("sumAll([10,5]) should return 45", function() {
        expect(sumAll([10, 5])).toBe(45);
    });
})

describe("Diff Two Arrays", function() {
    it("should return an array", function() {
        expect(diffArray([], [])).toEqual(jasmine.any(Array));
    });
    it('diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return an array with one item', function() {
        expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length).toBe(1);
    });
    it('diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"]', function() {
        expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool"]);
    });
    it('diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return an array with two items', function() {
        expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length).toBe(2);
    });
    it('diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) should return an empty array', function() {
        expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).toEqual([]);
    });
    it("diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]", function() {
        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
    });
    it('diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) should return an array with two items', function() {
        expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length).toBe(2);
    });
    it('diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) should return ["piglet", 4]', function() {
        expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).toEqual(['piglet', 4]);
    });
    it("diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']) should return an array with three items", function() {
        expect(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']).length).toBe(3);
    });
    it("diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']) should return ['snuffleupagus', 'cookie monster', 'elmo']", function() {
        expect(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo'])).toEqual(['snuffleupagus', 'cookie monster', 'elmo']);
    });
})

describe("Check for Palindromes", function() {
    it('palindrome("eye") should return a boolean', function() {
        expect(palindrome('eye')).toEqual(jasmine.any(Boolean));
    });
    it('palindrome("eye") should return true', function() {
        expect(palindrome("eye")).toEqual(true);
    });
    it('palindrome("_eye") should return true', function() {
        expect(palindrome('_eye')).toEqual(true);
    });
    it('palindrome("race car") should return true', function() {
        expect(palindrome('race car')).toEqual(true);
    });
    it('palindrome("not a palindrome") should return false', function() {
        expect(palindrome('not a palindrome')).toEqual(false);
    });
    it('palindrome("A man, a plan, a canal. Panama") should return true', function() {
        expect(palindrome("A man, a plan, a canal. Panama")).toEqual(true);
    });
    it('palindrome("never odd or even") should return true', function() {
        expect(palindrome("never odd or even")).toEqual(true);
    });
    it('palindrome("nope") should return false', function() {
        expect(palindrome('nope')).toEqual(false);
    });
    it('palindrome("almostomla") should return false', function() {
        expect(palindrome("almostomla")).toEqual(false);
    });
    it('palindrome("My age is 0, 0 si ega ym.") should return true', function() {
        expect(palindrome("My age is 0, 0 si ega ym.")).toEqual(true);
    });
    it('palindrome("1 eye for of 1 eye.") should return false', function() {
        expect(palindrome('1 eye for of 1 eye.')).toEqual(false);
    });
    it('palindrome("0_0 (: /-\ :) 0-0") should return true', function() {
        expect(palindrome('0_0 (: /-\ :) 0-0')).toEqual(true);
    });
    it('palindrome("five|\_/|four") should return false', function() {
        expect(palindrome("five|\_/|four")).toEqual(false);
    });
})