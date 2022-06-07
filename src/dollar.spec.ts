import Dollar from './Dollar';

describe('Dollar', () => {
  it('Should return 10 dollars when five dollars are multiplied by 2', () => {
    const five: Dollar = new Dollar(5);

    let product: Dollar = five.times(2);

    expect(product.amount).toEqual(10);

    product = five.times(3);

    expect(product.amount).toEqual(30);
  });

  it('Should return true when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });
});
