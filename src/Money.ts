/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */

export abstract class Money {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static euro(amount: number): Euro {
    return new Euro(amount);
  }

  equals(other: Money): boolean {
    if (this.constructor !== other.constructor) {
      return false;
    }

    return this.amount === other.amount;
  }

  abstract times(multiplier: number): Money;
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar((this.amount *= multiplier));
  }
}

export class Euro extends Money {
  constructor(amount: number) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier: number): Euro {
    return new Euro((this.amount *= multiplier));
  }
}
