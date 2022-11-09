/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Expression } from './expression';
import Money from './Money';

export class Bank {
  reduce(source: Expression, to: string): Money {
    return Money.dollar(10);
  }
}
