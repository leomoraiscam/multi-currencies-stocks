import Dollar from './Dollar';
import Euro from './Euro';

describe('Dollar', () => {
  it('Should return 10 dollars when five dollars are multiplied by 2 and 15 when multiplier by 3', () => {
    const five: Dollar = new Dollar(5);

    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();

    expect(five.times(3).equals(new Dollar(30))).toBeTruthy();
  });

  it('Should return 10 euros when five euros are multiplied by 2 and 15 when multiplier by 3', () => {
    const five: Euro = new Euro(5);

    expect(five.times(2).equals(new Euro(10))).toBeTruthy();

    expect(five.times(3).equals(new Euro(30))).toBeTruthy();
  });

  it('Should return true when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
