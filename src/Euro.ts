/* eslint-disable no-return-assign */
import Money from './Money';

class Euro extends Money {
  constructor(amount: number) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier: number): Euro {
    return new Euro((this.amount *= multiplier));
  }
}

export default Euro;
