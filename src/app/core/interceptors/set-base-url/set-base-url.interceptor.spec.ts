import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { setBaseUrlInterceptor } from './set-base-url.interceptor';

describe('setBaseUrlInterceptor', () => {
    const interceptor: HttpInterceptorFn = (req, next) =>
        TestBed.runInInjectionContext(() => setBaseUrlInterceptor(req, next));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(interceptor).toBeTruthy();
    });
});
