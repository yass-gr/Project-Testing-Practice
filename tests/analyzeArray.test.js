import analyzeArray from "../scripts/analyzeArray";

test('basic array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('single element', () => {
    expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    });
});

test('two elements', () => {
    expect(analyzeArray([10, 20])).toEqual({
        average: 15,
        min: 10,
        max: 20,
        length: 2
    });
});

test('negative numbers', () => {
    expect(analyzeArray([-5, -2, -10, -1])).toEqual({
        average: -4.5,
        min: -10,
        max: -1,
        length: 4
    });
});

test('empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
    });
});
