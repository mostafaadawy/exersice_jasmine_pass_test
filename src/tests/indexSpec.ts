import arrays from '../utilities/arrays.js';
import numbers from '../utilities/numbers.js';
import strings from '../utilities/strings.js';

describe("jasmine for teting",()=>{
  it('expect myFunc(5) to equal 25', () => {
    expect(arrays.lgNum([1,2,3,4])).toEqual(4);
  });
  it('expect myFunc(5) to equal 25', () => {
    expect(numbers.subtract(6,4)).toBeGreaterThan(1);
  });
  it('expect myFunc(5) to equal 25', () => {
    expect(strings.capitalize("abc")).toBe("Abc");
  });
});
