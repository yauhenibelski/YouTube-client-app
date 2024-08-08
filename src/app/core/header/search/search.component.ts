import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentStoreService } from '@shared/services/content-store/content-store.service';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs';

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
        private readonly contentService: ContentStoreService,
        private readonly destroyRef: DestroyRef,
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
                this.contentService.loadSearchContent(value);
            });
    }
}
