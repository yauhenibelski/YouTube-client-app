import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentStoreService } from '@shared/services/content-store/content-store.service';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';

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

    constructor(private readonly contentService: ContentStoreService) {}

    loadContent(): void {
        if (!this.search.valid) return;

        this.contentService.loadContent();
    }
}
