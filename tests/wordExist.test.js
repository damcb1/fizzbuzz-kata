
import { describe, expect, test } from "vitest";
import { wordExist } from "../src/js/wordExist.js";

describe('Word Exist Test', () => {

    test('Word english exist, should return true', () => {

        // Given - Prepare
        const sentence = 'abcEnglishdef'
        const word = 'english'
        const expected = true

        // When - Action
        const result = wordExist(sentence, word);

        // Then - Assert
        expect(result).toBeTypeOf('boolean');
        expect(result).toBe(expected);
    });

    // should return false

})