import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { setAccessKeyInterceptor } from './set-access-key.interceptor';

describe('setAccessKeyInterceptor', () => {
    const interceptor: HttpInterceptorFn = (req, next) =>
        TestBed.runInInjectionContext(() => setAccessKeyInterceptor(req, next));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(interceptor).toBeTruthy();
    });
});
