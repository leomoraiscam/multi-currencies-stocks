/* eslint-disable no-return-assign */
class Dollar {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar((this.amount *= multiplier));
  }
}

export default Dollar;
