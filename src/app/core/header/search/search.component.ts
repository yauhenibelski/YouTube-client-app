import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs';
import { Store } from '@ngrx/store';
import { ContentActions } from '@store/content/content.actions';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, ReactiveFormsModule, CustomButtonComponent],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    readonly search = new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
    });

    constructor(
        private readonly destroyRef: DestroyRef,
        private readonly store: Store,
    ) {
        this.handleSearchInputValue();
    }

    private handleSearchInputValue(): void {
        this.search.valueChanges
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                filter(value => value.length >= 3),
                debounceTime(500),
                distinctUntilChanged(),
            )
            .subscribe(value => {
                this.store.dispatch(ContentActions.loadByKeyWord(value));
            });
    }
}
