/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */

export abstract class Money {
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
    if (this.constructor !== other.constructor) {
      return false;
    }

    return this.amount === other.amount;
  }

  abstract times(multiplier: number): Money;

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

  times(multiplier: number): Dollar {
    return Money.dollar((this.amount *= multiplier));
  }
}

export class Euro extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
    this.amount = amount;
    this._currency = currency;
  }

  times(multiplier: number): Euro {
    return Money.euro((this.amount *= multiplier));
  }
}
