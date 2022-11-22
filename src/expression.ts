/* eslint-disable @typescript-eslint/no-empty-interface */

import { Bank } from './bank';
import Money from './Money';

/* eslint-disable @typescript-eslint/naming-convention */
export interface Expression {
  reduce: (bank: Bank, to: string) => Money;
  plus: (addend: Expression) => Expression;
  times: (multiplier: number) => Expression;
}
