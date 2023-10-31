const suma = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1,2)).toBe(3);
});

test('sumar 20 + 20 es igual a 40', () => {
    expect(suma(20 ,20)).toBe(40);
});

test('sumar 10 + 100 es igual a 110', () => {
    expect(suma(10,100)).toBe(110);
});

test('sumar 200 + 200 es igual a 400', () => {
    expect(suma(200,200)).toBe(400);
});

test('sumar 20 + 10 es igual a 30', () => {
    expect(suma(20,10)).toBe(30);
});