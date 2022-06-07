/* eslint-disable no-return-assign */
class Dollar {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar((this.amount *= multiplier));
  }

  equals(other: Dollar): boolean {
    return this.amount === other.amount;
  }
}

export default Dollar;
