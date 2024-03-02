import { Calculator } from './calculator';

describe('test for calculator', () => {
  it('#multiply should be a correct value', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta = calculator.multiply(3, 3);
    const rta2 = calculator.multiply(1, 3);
    const rta3 = calculator.multiply(3, 0);
    const rta4 = calculator.multiply(0, 200);
    //Assert
    expect(rta).toEqual(9);
    expect(rta2).toEqual(3);
    expect(rta3).toEqual(0);
    expect(rta4).toEqual(0);
  });

  it('#multiply should be a four', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta = calculator.multiply(2, 2);
    //Assert
    expect(rta).toEqual(4);
  });

  it('#divide should be a some numbers', () => {
    //Arrange
    const calculator = new Calculator();
    //Act
    const rta = calculator.divide(2, 2);
    const rta2 = calculator.divide(4, 2);
    const rta3 = calculator.divide(3, 2);
    const rta4 = calculator.divide(3, 0);
    //Assert
    expect(rta).toEqual(1);
    expect(rta2).toEqual(2);
    expect(rta3).toEqual(1.5);
    expect(rta4).toBeNull();
  });

  it('tests matchers', () => {
    const name = 'name';
    let name2;

    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1 + 3 === 4).toBeTruthy();
    expect(1 + 1 === 3).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(15).toBeGreaterThan(10);

    expect('123456').toMatch(/123/);
    expect(['apples', 'oranges', 'pears']).toContain('oranges');
  });
});
