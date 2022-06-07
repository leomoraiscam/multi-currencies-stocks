/* eslint-disable no-return-assign */
class Euro {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Euro {
    return new Euro((this.amount *= multiplier));
  }

  equals(other: Euro): boolean {
    return this.amount === other.amount;
  }
}

export default Euro;
