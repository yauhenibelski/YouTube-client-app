import { Injectable, computed, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SwitchFilterBlockViewService {
    private readonly isShowFilterBlockSignal = signal<boolean>(false);

    readonly isShowFilterBlock = computed(this.isShowFilterBlockSignal);

    toggleView(): void {
        this.isShowFilterBlockSignal.set(!this.isShowFilterBlockSignal());
    }
}
