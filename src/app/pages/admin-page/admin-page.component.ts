import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GetControlErrorMessagePipe } from '@shared/pipes/get-control-error-message/get-control-error-message.pipe';
import { maxDate } from '@shared/form-validators/max-date.validator';
import { required } from '@shared/form-validators/required.validator';
import { length } from '@shared/form-validators/length.validator';
import { titleValidators } from './card-form-validators/title.validators';

@Component({
    selector: 'app-admin-page',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatDatepickerModule,
        MatIconModule,
        GetControlErrorMessagePipe,
    ],
    templateUrl: './admin-page.component.html',
    styleUrl: './admin-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideNativeDateAdapter()],
})
export class AdminPageComponent {
    constructor(private readonly formBuilder: FormBuilder) {}

    readonly cardForm = this.formBuilder.nonNullable.group({
        title: ['', titleValidators],
        date: ['', [maxDate('The date is invalid')]],
        imageLink: ['', [required('Please enter a link to the image')]],
        videoLink: ['', [required('Please enter a link to the video')]],
        description: ['', [length('max', 255, 'The description is too long')]],
        tags: this.formBuilder.nonNullable.array<string>([]),
    });

    readonly newTagControl = new FormControl('', {
        validators: () => (this.tags.length ? null : { tag: 'at least one tag' }),
        nonNullable: true,
    });

    addTag(): void {
        const tagValue = this.newTagControl.getRawValue();
        const newControl = this.formBuilder.nonNullable.control(tagValue);

        this.tags.push(newControl);

        this.newTagControl.reset();
    }

    removeTag(index: number): void {
        this.tags.removeAt(index);

        this.newTagControl.reset();
        this.newTagControl.markAllAsTouched();
    }

    resetForm(): void {
        this.tags.clear();
        this.cardForm.reset();
        this.newTagControl.reset();
    }

    get tags(): FormArray<FormControl<string>> {
        return this.cardForm.controls.tags;
    }

    get canAddTag(): boolean {
        const MAX_TAG_COUNT = 5;

        return this.tags.controls.length < MAX_TAG_COUNT;
    }

    get isFormValid(): boolean {
        return this.cardForm.valid && this.newTagControl.valid;
    }
}
