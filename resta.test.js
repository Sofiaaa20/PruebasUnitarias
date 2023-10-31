const restar = require('./resta');

test('restar 10 - 10 es igual a 0', () => {
    expect(restar(10,10)).toBe(0);
});

test('restar 100 - 40 es igual a 0', () => {
    expect(restar(100,40)).toBe(60);
});

test('restar 10 - -3 es igual a 13', () => {
    expect(restar(10,-3)).toBe(13);
});

test('restar 60 - 20 es igual a 40', () => {
    expect(restar(60,20)).toBe(40);
});

test('restar 10 - 10 es igual a 0', () => {
    expect(restar(-5,5)).toBe(-10);
});
