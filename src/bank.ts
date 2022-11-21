/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { Expression } from './expression';
import Money from './Money';
import { Sum } from './sum';

export class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
