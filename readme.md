Instructions

This project is already configured to work with TypeScript and Jasmine.

Your task is to write at least one spec per function used on the index.ts file.

    There should be at least 7 specs.
    You must use at least 5 different matchers for your tests.
    All of your specs can be on 1 spec file.

Make sure to build your TypeScript project and make certain all of your tests pass. Check the package.json file to view scripts available.

NOTE: a popup of "Renderer Failure: tsconfig.json" may open when starting this project. It is safe to ignore this error. Error is due to the comments in tsconfig.json not being considered valid JSON; however, it is generally considered safe to place comments in JSON config files.

/////////////////////////////
Jasmine Syntax

    Use the describe keyword followed by a short description of what the suite is testing and one or more specs.
    A best practice is to start a sentence with “it” and then complete the sentence with the description of what the suite is testing.

describe(“suite description”, () => {
    it(“describes the spec”, () => {
        const myVar = true;
        expect(myVar).toBe(true);
    });
}); 

Comparisons

    Can compare strings, numbers, objects, or arrays
    .toEqual(expected value)checks if the tested object is the same object

Test Types
Truthiness

    .toBeTruthy()passes when
        The expectation has any non-zero value
        The expectation evaluates to true
    .toBeFalsy()passes when the value is:
        0
        '' (an empty string)
        undefined
        null
        NaN
    If you just need the Boolean value of false, use .toEqual()

Numerical Matchers

    .toBeCloseTo(expected value, precision)
        Passes if a value is within a specified precision of the expected value
        Precision is optional and is represented the number of decimal points to check (defaults to 2)
    .toBeGreaterThan(expected value)
    .toBeLessThan(expected value)
    .toBeGreaterThanOrEqual(expected value)
    .toBeLessThanOrEqual(expected value)

Negating Other Matchers

    In JavaScript, use the ! to negate
    In TypeScript, use not
    In Jasmine, use .not

Exceptions

    .toThrow(expected value)
    .toThrowError(expected value, expected message) (expected value and expected message are optional)

Other Matchers

    .toContain(expected value)
    .toMatch(expected value)
    .toBeDefined()
    .toBeUndefined()
    .toBeNull()
    .toBeNan()
    Custom matchers

New Terms
Term 	Definition
Comparison Test 	A type of test that compares strings, numbers, objects, or arrays
Numerical Matchers Test 	A test of numerical values within a specified range of the expected value
Spec 	An individual test
Suite 	A group of related tests
Truthiness 	When a conditional proves to be truth-like such as the boolean true or a condition being true, or a value not equal to 0, NaN, undefined, null, or empty.
Further Reading

Check out Jasmine's full documentation for working with matches.
//////////////////

To Complete This Exercise:

    Import each utility module into the indexSpec.ts file.
    Figure out which functions are being used in the index.ts file.
    Copy over the arrays being used in the index.ts file.
    Write at least 7 specs, one for each of the functions used in the index.ts file. Make sure to use at least 5 different matchers for your specs.

indexSpec.ts

import arrays from '../utilities/arrays';
import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it ('should capitalize a string', () => {
    expect(strings.capitalize('a sentence')).toEqual('A Sentence');
});

it ('should be a sum greater than 10', () => {
    expect(numbers.sum(3,10)).toBeGreaterThan(10);
});

it ('multiply 3 by 5 and be 15', () => {
    expect(numbers.multiply(3,5)).toEqual(15);
});

it ('should add numbers in array and be truthy', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
});

it ('should concatenate 2 arrays to not equal just 1', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
});

it ('should not contain the third index', () => {
    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
});

it ('should not have a large number and be falsy', () => {
    expect(arrays.lgNum(wordArr)).toBeFalsy();
});

    Run npm run test to ensure that all tests pass.

