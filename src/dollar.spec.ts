import Dollar from './Dollar';

describe('Dollar', () => {
  it('Should return 10 dollars when five dollars are multiplied by 2', () => {
    const five = new Dollar(5);

    five.times(2);

    expect(five.amount).toEqual(10);
  });
});
