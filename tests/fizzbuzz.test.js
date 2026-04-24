import { describe, test, expect } from "vitest";
import FizzBuzz from "../src/js/fizzbuzz";

describe('FizzBuzz', () => {
    
    test('should return "Fizz" for multiples of 3', () => {
        expect(FizzBuzz(3)) .toBe ("Fizz");    
    });

    test('should return "Buzz" for multiples of 5', () => {
        expect(FizzBuzz(5)) .toBe("Buzz");
    });

    test('should return "FizzBuzz" for multiples of both 3 and 5', () => {
        expect(FizzBuzz(15)) .toBe("FizzBuzz");    
    });

});