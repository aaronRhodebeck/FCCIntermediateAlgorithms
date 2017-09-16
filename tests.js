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
        expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toBe(["pink wool"]);
    });
    it('diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return an array with two items', function() {
        expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).length).toBe(2);
    });
    it('diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) should return an empty array', function() {
        expect(diffArray([], [])).toBe([]);
    });
    it("diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]", function() {
        expect(diffArray([], [])).toBe([4]);
    });
    it('diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) should return an array with two items', function() {
        expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).length).toBe(2);
    });
    it("diffArray([],[]) should return ['piglet', 4]", function() {
        expect(diffArray([], [])).toBe(['piglet', 4]);
    });
    it("diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']) should return an array with three items", function() {
        expect(diffArray([], []).length).toBe(3);
    });
    it("diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']) should return ['snuffleupagus', 'cookie monster', 'elmo']", function() {
        expect(diffArray([], [])).toBe(['snuffleupagus', 'cookie monster', 'elmo']);
    });
})