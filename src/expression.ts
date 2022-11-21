/* eslint-disable @typescript-eslint/no-empty-interface */

import Money from './Money';

/* eslint-disable @typescript-eslint/naming-convention */
export interface Expression {
  reduce: (to: string) => Money;
}
