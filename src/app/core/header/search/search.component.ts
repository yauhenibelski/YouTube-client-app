import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, debounceTime } from 'rxjs';
import { ContentStore } from '../../../store-signal/content-store';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [MatButtonModule, MatIconModule, ReactiveFormsModule, CustomButtonComponent],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    readonly contentStore = inject(ContentStore);

    readonly search = new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
    });

    constructor(private readonly destroyRef: DestroyRef) {
        this.handleSearchInputValue();
    }

    private handleSearchInputValue(): void {
        this.search.valueChanges
            .pipe(
                takeUntilDestroyed(this.destroyRef),
                filter(value => value.length >= 3),
                debounceTime(500),
            )
            .subscribe(value => {
                this.contentStore.loadContentByWord(value);
            });
    }
}
