/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable max-classes-per-file */

class Money {
  private amount: number;
  private _currency: string;

  constructor(amount: number, _currency: string) {
    this.amount = amount;
    this._currency = _currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static euro(amount: number): Money {
    return new Money(amount, 'EUR');
  }

  equals(other: Money): boolean {
    if (this._currency !== other._currency) {
      return false;
    }

    return this.amount === other.amount;
  }

  times(multiplier: number): Money {
    return new Money((this.amount *= multiplier), this._currency);
  }

  currency() {
    return this._currency;
  }
}

export default Money;
