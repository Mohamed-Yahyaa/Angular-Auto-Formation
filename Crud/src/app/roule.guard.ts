import { CanActivateFn } from '@angular/router';

export const rouleGuard: CanActivateFn = (route, state) => {
  return true;
};
