import { TestBed } from '@angular/core/testing';

import { SwitchFilterBlockViewService } from './switch-filter-block-view.service';

describe('SwitchFilterBlockViewService', () => {
    let service: SwitchFilterBlockViewService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SwitchFilterBlockViewService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
