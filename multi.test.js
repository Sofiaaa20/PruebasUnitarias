const multi = require('./multi');

test('restar 10 * 10 es igual a 100', () => {
    expect(multi(10,10)).toBe(100);
});

test('restar 10 * 3 es igual a 0', () => {
    expect(multi(10,3)).toBe(30);
});

test('restar 5 * 5 es igual a 25', () => {
    expect(multi(5,5)).toBe(25);
});

test('restar 10 * 6 es igual a 60', () => {
    expect(multi(10,6)).toBe(60);
});

test('restar 2 * 2 es igual a 4', () => {
    expect(multi(2,2)).toBe(4);
});