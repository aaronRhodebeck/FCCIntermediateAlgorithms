/******************************************************** 
 * Tests for Intermediate Algorithms for Free Code Camp
 *********************************************************/

describe("Sum of Numbers in Range", function() {
    it("should return a number", function() {
        expect(sumAll([1,4])).toEqual(jasmine.any(Number));
    });
    it("sumAll([1, 4]) should return 10", function() {
        expect(sumAll([1,4])).toBe(10);
    });
    it("sumAll([4, 1]) should return 10", function() {
        expect(sumAll([4,1])).toBe(10);
    });
    it("sumAll([5, 10]) should return 45", function() {
        expect(sumAll([5,10])).toBe(45);
    });
    it("sumAll([10,5]) should return 45", function() {
        expect(sumAll([10,5])).toBe(45);
    });
})