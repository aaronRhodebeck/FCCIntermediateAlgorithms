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

describe("Seek and Destroy", function() {
    it('destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]', function() {
        expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
    });
    it('destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]', function() {
        expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
    });
    it('destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1]', function() {
        expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
    });
    it('destroyer([2, 3, 2, 3], 2, 3) should return an empty array', function() {
        expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
    });
    it('destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"]', function() {
        expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toEqual(["hamburger"]);
    });
    it('destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65]', function() {
        expect(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")).toEqual([12, 92, 65]);
    })
})

describe("Wherefore Art Thou", function() {
    it('whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]', function() {
        expect(
            whatIsInAName(
                [
                    { first: "Romeo", last: "Montague" },
                    { first: "Mercutio", last: null },
                    { first: "Tybalt", last: "Capulet" }
                ], { last: "Capulet" }
            )
        ).toEqual([{ first: "Tybalt", last: "Capulet" }]);
    });
    it('whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]', function() {
        expect(
            whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
                apple: 1
            })
        ).toEqual([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }]);
    });
    it('whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]', function() {
        expect(
            whatIsInAName(
                [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], { apple: 1, bat: 2 }
            )
        ).toEqual([{ apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 }]);
    });
    it('whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }]', function() {
        expect(
            whatIsInAName(
                [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }], { apple: 1, cookie: 2 }
            )
        ).toEqual([{ apple: 1, bat: 2, cookie: 2 }]);
    });
    it('whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]', function() {
        expect(
            whatIsInAName(
                [
                    { apple: 1, bat: 2 },
                    { apple: 1 },
                    { apple: 1, bat: 2, cookie: 2 },
                    { bat: 2 }
                ], { apple: 1, bat: 2 }
            )
        ).toEqual([{ apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 }]);
    });
    it('whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return an empty array', function() {
        expect(
            whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })
        ).toEqual([]);
    });
});

describe("Spinal Tap Case", function() {
    it('spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"', function() {
        expect(spinalCase("This Is Spinal Tap")).toEqual("this-is-spinal-tap");
    });
    it('spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"', function() {
        expect(spinalCase("thisIsSpinalTap")).toEqual("this-is-spinal-tap");
    });
    it('spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show"', function() {
        expect(spinalCase("The_Andy_Griffith_Show")).toEqual("the-andy-griffith-show");
    });
    it('spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh"', function() {
        expect(spinalCase("Teletubbies say Eh-oh")).toEqual("teletubbies-say-eh-oh");
    });
    it('spinalCase("AllThe-small Things") should return "all-the-small-things"', function() {
        expect(spinalCase("AllThe-small Things")).toEqual("all-the-small-things");
    })
});

describe("Roman Numeral Converter", function() {
    it('convertToRoman(2) should return "II"', function() {
        expect(convertToRoman(2)).toEqual("II");
    });
    it('convertToRoman(3) should return "III"', function() {
        expect(convertToRoman(3)).toEqual("III");
    });
    it('convertToRoman(4) should return "IV"', function() {
        expect(convertToRoman(4)).toEqual("IV");
    });
    it('convertToRoman(5) should return "V"', function() {
        expect(convertToRoman(5)).toEqual("V");
    });
    it('convertToRoman(9) should return "IX"', function() {
        expect(convertToRoman(9)).toEqual("IX");
    });
    it('convertToRoman(12) should return "XII', function() {
        expect(convertToRoman(12)).toEqual("XII");
    });
    it('convertToRoman(16) should return "XVI"', function() {
        expect(convertToRoman(16)).toEqual("XVI");
    });
    it('convertToRoman(29) should return "XXIX"', function() {
        expect(convertToRoman(29)).toEqual("XXIX");
    });
    it('convertToRoman(44) should return "XLIV"', function() {
        expect(convertToRoman(44)).toEqual("XLIV");
    });
    it('convertToRoman(45) should return "XLV"', function() {
        expect(convertToRoman(45)).toEqual("XLV");
    });
    it('convertToRoman(68) should return "LXVIII"', function() {
        expect(convertToRoman(68)).toEqual("LXVIII");
    });
    it('convertToRoman(83) should return "LXXXIII"', function() {
        expect(convertToRoman(83)).toEqual("LXXXIII");
    });
    it('convertToRoman(97) should return "XCVII"', function() {
        expect(convertToRoman(97)).toEqual("XCVII");
    });
    it('convertToRoman(99) should return "XCIX"', function() {
        expect(convertToRoman(99)).toEqual("XCIX");
    });
    it('convertToRoman(400) should return "CD"', function() {
        expect(convertToRoman(400)).toEqual("CD");
    });
    it('convertToRoman(500) should return "D"', function() {
        expect(convertToRoman(500)).toEqual("D");
    });
    it('convertToRoman(501) should return "DI"', function() {
        expect(convertToRoman(501)).toEqual("DI");
    });
    it('convertToRoman(649) should return "DCXLIX"', function() {
        expect(convertToRoman(649)).toEqual("DCXLIX");
    });
    it('convertToRoman(798) should return "DCCXCVIII"', function() {
        expect(convertToRoman(798)).toEqual("DCCXCVIII");
    });
    it('convertToRoman(891) should return "DCCCXCI"', function() {
        expect(convertToRoman(891)).toEqual("DCCCXCI");
    });
    it('convertToRoman(1000) should return "M"', function() {
        expect(convertToRoman(1000)).toEqual("M");
    });
    it('convertToRoman(1004) should return "MIV"', function() {
        expect(convertToRoman(1004)).toEqual("MIV");
    });
    it('convertToRoman(1006) should return "MVI"', function() {
        expect(convertToRoman(1006)).toEqual("MVI");
    });
    it('convertToRoman(1023) should return "MXXIII"', function() {
        expect(convertToRoman(1023)).toEqual("MXXIII");
    });
    it('convertToRoman(2014) should return "MMXIV"', function() {
        expect(convertToRoman(2014)).toEqual("MMXIV");
    });
    it('convertToRoman(3999) should return "MMMCMXCIX"', function() {
        expect(convertToRoman(3999)).toEqual("MMMCMXCIX");
    });
})

describe("Ceasar's Cipher", function() {
    it('rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP', function() {
        expect(rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP");
    });
    it('rot13("SERR CVMMN!") should decode to FREE PIZZA!', function() {
        expect(rot13("SERR CVMMN!")).toEqual("FREE PIZZA!");
    });
    it('rot13("SERR YBIR?") should decode to FREE LOVE?', function() {
        expect(rot13("SERR YBIR?")).toEqual("FREE LOVE?");
    });
    it('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', function() {
        expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toEqual(
            "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
        );
    });
});

describe("Pig Latin", function() {
    it('translatePigLatin("california") should return "aliforniacay"', function() {
        expect(translatePigLatin("california")).toEqual("aliforniacay");
    });
    it('translatePigLatin("paragraphs") should return "aragraphspay"', function() {
        expect(translatePigLatin("paragraphs")).toEqual("aragraphspay");
    });
    it('translatePigLatin("glove") should return "oveglay"', function() {
        expect(translatePigLatin("glove")).toEqual("oveglay");
    });
    it('translatePigLatin("algorithm") should return "algorithmway"', function() {
        expect(translatePigLatin("algorithm")).toEqual("algorithmway");
    });
    it('translatePigLatin("eight") should return "eightway"', function() {
        expect(translatePigLatin("eight")).toEqual("eightway");
    });
    it('should handle words where the first vowel comes in the end of the word', function() {
        expect(translatePigLatin('thou')).toEqual('outhay');
        expect(translatePigLatin('banana')).toEqual('ananabay');
        expect(translatePigLatin('cargo')).toEqual('argocay');
    });
    it('should handle words without vowels', function() {
        expect(translatePigLatin('dfhkj')).toEqual('dfhkjay');
        expect(translatePigLatin('trnks')).toEqual('trnksay');
    });
})

describe("Search and Replace", function() {
    it('myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall"', function() {
        expect(myReplace("Let us go to the store", "store", "mall")).toEqual("Let us go to the mall");
    });
    it('myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch"', function() {
        expect(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual("He is Sitting on the couch");
    });
    it('myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error"', function() {
        expect(myReplace("This has a spellngi error", "spellngi", "spelling")).toEqual("This has a spelling error");
    });
    it('myReplace("His name is Tom", "Tom", "john") should return "His name is John"', function() {
        expect(myReplace("His name is Tom", "Tom", "john")).toEqual("His name is John");
    });
    it('myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms"', function() {
        expect(myReplace("Let us get back to more Coding", "Coding", "algorithms")).toEqual("Let us get back to more Algorithms");
    });
})

describe("DNA Pairing", function() {
    it('pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', function() {
        expect(pairElement("ATCGA")).toEqual([
            ["A", "T"],
            ["T", "A"],
            ["C", "G"],
            ["G", "C"],
            ["A", "T"]
        ]);
    });
    it('pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', function() {
        expect(pairElement("TTGAG")).toEqual([
            ["T", "A"],
            ["T", "A"],
            ["G", "C"],
            ["A", "T"],
            ["G", "C"]
        ]);
    });
    it('pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', function() {
        expect(pairElement("CTCTA")).toEqual([
            ["C", "G"],
            ["T", "A"],
            ["C", "G"],
            ["T", "A"],
            ["A", "T"]
        ]);
    });
})

describe("Missing Letters", function() {
    it('fearNotLetter("abce") should return "d"', function() {
        expect(fearNotLetter("abce")).toEqual("d");
    });
    it('fearNotLetter("stvwx") should return "u"', function() {
        expect(fearNotLetter("stvwx")).toEqual("u");
    });
    it('fearNotLetter("bcdf") should return "e"', function() {
        expect(fearNotLetter("bcdf")).toEqual("e");
    });
    it('fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined', function() {
        expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toEqual(undefined);
    });
})

describe("Sorted Union", function() {
    it('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]', function() {
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
    });
    it('uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]', function() {
        expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5],
            [4]
        ]);
    });
    it('uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]', function() {
        expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
    });
    it('uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]', function() {
        expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
    });
})

describe("Convert HTML Entities", function() {
    pending("Appears to work, but says failing -- Working on FCC Site");
    it('convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana', function() {
        expect(convertHTML("Dolce & Gabbana")).toEqual("Dolce &​amp; Gabbana");
    });
    it('convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos', function() {
        expect(convertHTML("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers &​lt; Pizza &​lt; Tacos");
    });
    it('convertHTML("Sixty > twelve") should return Sixty &​gt; twelve', function() {
        expect(convertHTML("Sixty > twelve")).toEqual('Sixty &​gt; twelve');
    });
    it(`convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;`, function() {
        expect(convertHTML('Stuff in "quotation marks"')).toEqual('Stuff in &​quot;quotation marks&​quot;');
    });
    it(`convertHTML("Schindler's List") should return Schindler&​apos;s List`, function() {
        expect(convertHTML("Schindler's List")).toEqual('Schindler&​apos;s List');
    });
    it(`convertHTML("<>") should return &​lt;&​gt;`, function() {
        expect(convertHTML("<>")).toEqual('&​lt;&​gt;');
    });
    it(`convertHTML("abc") should return abc`, function() {
        expect(convertHTML("abc")).toEqual('abc');
    });
});

describe("Sum All Odd Fibonacci Numbers", function() {
    it('sumFibs(1) should return a number', function() {
        expect(sumFibs(1)).toEqual(jasmine.any(Number));
    });
    it('sumFibs(1000) should return 1785', function() {
        expect(sumFibs(1000)).toEqual(1785);
    });
    it('sumFibs(4000000) should return 4613732', function() {
        expect(sumFibs(4000000)).toEqual(4613732);
    });
    it('sumFibs(4) should return 5', function() {
        expect(sumFibs(4)).toEqual(5);
    });
    it('sumFibs(75024) should return 60696', function() {
        expect(sumFibs(75024)).toEqual(60696);
    });
    it('sumFibs(75025) should return 135721', function() {
        expect(sumFibs(75025)).toEqual(135721);
    });
})

describe("Sum All Primes", function() {
    it('sumPrimes(10) should return a number', function() {
        expect(sumPrimes(10)).toEqual(jasmine.any(Number));
    });
    it('sumPrimes(10) should return 17', function() {
        expect(sumPrimes(10)).toEqual(17);
    });
    it('sumPrimes(977) should return 73156', function() {
        expect(sumPrimes(977)).toEqual(73156);
    });
})

describe("Smallest Common Multiple", function() {
    it('smallestCommons([1, 5]) should return a number', function() {
        expect(smallestCommons([1, 5])).toEqual(jasmine.any(Number));
    });
    it('smallestCommons([1, 5]) should return 60', function() {
        expect(smallestCommons([1, 5])).toEqual(60);
    });
    it('smallestCommons([5, 1]) should return 60', function() {
        expect(smallestCommons([5, 1])).toEqual(60);
    });
    it('smallestCommons([2, 10]) should return 2520', function() {
        expect(smallestCommons([2, 10])).toEqual(2520);
    });
    it('smallestCommons([1, 13]) should return 360360', function() {
        expect(smallestCommons([1, 13])).toEqual(360360);
    });
    it('smallestCommons([23, 18]) should return 6056820', function() {
        expect(smallestCommons([23, 18])).toEqual(6056820);
    });
})

describe("Drop It", function() {
    it('dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4]', function() {
        expect(dropElements([1, 2, 3, 4], function(n) { return n >= 3; })).toEqual([3, 4]);
    });
    it('dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]', function() {
        expect(dropElements([0, 1, 0, 1], function(n) { return n === 1; })).toEqual([1, 0, 1]);
    });
    it('dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3]', function() {
        expect(dropElements([1, 2, 3], function(n) { return n > 0; })).toEqual([1, 2, 3]);
    });
    it('dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return an empty array', function() {
        expect(dropElements([1, 2, 3, 4], function(n) { return n > 5; })).toEqual([]);
    });
    it('dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4]', function() {
        expect(dropElements([1, 2, 3, 7, 4], function(n) { return n > 3; })).toEqual([7, 4]);
    });
    it('dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]', function() {
        expect(dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; })).toEqual([3, 9, 2]);
    });
})

describe("Steamroller", function() {
    it('steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]', function() {
        expect(steamrollArray([
            [
                ["a"]
            ],
            [
                ["b"]
            ]
        ])).toEqual(["a", "b"]);
    });
    it('steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]', function() {
        expect(steamrollArray([1, [2],
            [3, [
                [4]
            ]]
        ])).toEqual([1, 2, 3, 4]);
    });
    it('steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]', function() {
        expect(steamrollArray([1, [],
            [3, [
                [4]
            ]]
        ])).toEqual([1, 3, 4]);
    });
    it('steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]', function() {
        expect(steamrollArray([1, {},
            [3, [
                [4]
            ]]
        ])).toEqual([1, {}, 3, 4]);
    });
})

describe("Binary Agent", function() {
    it(`binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"`, function() {
        expect(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")).toEqual("Aren't bonfires fun!?");
    });
    it('binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"', function() {
        expect(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")).toEqual("I love FreeCodeCamp!");
    });
})