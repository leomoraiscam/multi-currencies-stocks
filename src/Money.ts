/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */

export class Money {
  public amount: number;
  public _currency: string;

  constructor(amount: number, _currency: string) {
    this.amount = amount;
    this._currency = _currency;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }

  static euro(amount: number): Euro {
    return new Euro(amount, 'EUR');
  }

  equals(other: Money): boolean {
    if (this._currency !== other._currency) {
      return false;
    }

    return this.amount === other.amount;
  }

  times(multiplier: number): Money {
    return new Dollar((this.amount *= multiplier), this._currency);
  }

  currency() {
    return this._currency;
  }
}

export class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
    this.amount = amount;
    this._currency = currency;
  }
}

export class Euro extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
    this.amount = amount;
    this._currency = currency;
  }
}
