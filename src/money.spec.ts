import { Bank } from './bank';
import { Expression } from './expression';
import Money from './Money';
import { Sum } from './sum';

describe('Money', () => {
  it('Should handle dollar multiplication', () => {
    const five: Money = Money.dollar(5);

    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
    expect(five.times(3).equals(Money.dollar(30))).toBeTruthy();
  });

  it('Should handle euro multiplication', () => {
    const five: Money = Money.euro(5);

    expect(five.times(2).equals(Money.euro(10))).toBeTruthy();
    expect(five.times(3).equals(Money.euro(30))).toBeTruthy();
  });

  it.skip('Should handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy();
    expect(Money.euro(5).equals(Money.euro(6))).toBeFalsy();
    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy();
    expect(new Money(5, 'USD').equals(Money.dollar(5))).toBeTruthy();
  });

  it('Should correctly handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD');
    expect(Money.euro(1).currency()).toEqual('EUR');
  });

  it('should handle simple addition', () => {
    const bank = new Bank();

    const five = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const reduced: Money = bank.reduce(sum, 'USD');

    expect(reduced.equals(Money.dollar(10))).toBeTruthy();
  });

  it('should return a sum when plus is used', () => {
    const five = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum = result as Sum;

    expect(sum.augend).toEqual(five);
    expect(sum.addend).toEqual(five);
  });

  it('should reduce a sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, 'USD');

    expect(result).toEqual(Money.dollar(7));
  });

  it('should reduce from a money', () => {
    const bank: Bank = new Bank();

    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(result).toEqual(Money.dollar(1));
  });
});
