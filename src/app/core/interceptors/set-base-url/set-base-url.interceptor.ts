import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BASE_URL } from '@shared/di-token/base-url.token';

export const setBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
    const baseUrl = inject(BASE_URL);
    const newRequest = req.clone({ url: baseUrl + req.url });

    return next(newRequest);
};
