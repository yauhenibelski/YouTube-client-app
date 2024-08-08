import { HttpInterceptorFn } from '@angular/common/http';

export const setAccessKeyInterceptor: HttpInterceptorFn = (req, next) => {
    return next(
        req.clone({
            setParams: {
                key: import.meta.env.NG_APP_API_KEY,
            },
        }),
    );
};
