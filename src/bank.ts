/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Expression } from './expression';
import Money from './Money';
import { Sum } from './sum';

interface IRates {
  [index: string]: number;
}

interface IPair {
  from: string;
  to: string;
}

const currenciesToKey = (currencies: IPair): string => {
  return `${currencies.from}-${currencies.to}`;
};

export class Bank {
  private rates: IRates = {};

  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number): void {
    const currencies: IPair = { from, to };

    this.rates[currenciesToKey(currencies)] = rate;
  }

  rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }

    const currencies: IPair = { from, to };

    return this.rates[currenciesToKey(currencies)];
  }
}
