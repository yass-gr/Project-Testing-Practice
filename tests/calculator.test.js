import calculator from "../scripts/calculator";

test('add', () => {
    const calc = calculator();
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.add(-1, 1)).toBe(0);
});

test('subtract', () => {
    const calc = calculator();
    expect(calc.subtract(5, 3)).toBe(2);
    expect(calc.subtract(1, 5)).toBe(-4);
});

test('divide', () => {
    const calc = calculator();
    expect(calc.divide(10, 2)).toBe(5);
    expect(calc.divide(7, 2)).toBe(3.5);
});

test('multiply', () => {
    const calc = calculator();
    expect(calc.multiply(3, 4)).toBe(12);
    expect(calc.multiply(-2, 5)).toBe(-10);
});

test('all operations', () => {
    const calc = calculator();
    expect(calc.add(10, 5)).toBe(15);
    expect(calc.subtract(10, 5)).toBe(5);
    expect(calc.divide(10, 5)).toBe(2);
    expect(calc.multiply(10, 5)).toBe(50);
});
