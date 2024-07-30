import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isUnauthorizedGuard } from './is-unauthorized.guard';

describe('isUnauthorizedGuard', () => {
    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => isUnauthorizedGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });
});
