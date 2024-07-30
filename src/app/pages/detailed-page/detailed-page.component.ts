import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, of, switchMap } from 'rxjs';
import { ContentStoreService } from '@shared/services/content-store/content-store.service';
import { Content } from '@interface/content.interface';

@Component({
    selector: 'app-detailed-page',
    templateUrl: './detailed-page.component.html',
    styleUrl: './detailed-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedPageComponent {
    constructor(
        private readonly contentStoreService: ContentStoreService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) {}

    readonly content$: Observable<Content | undefined> = this.activatedRoute.paramMap.pipe(
        switchMap(params => {
            const id = params.get('id');

            const content = this.contentStoreService.getContentById(`${id}`);

            return content ? of(content) : (this.router.navigateByUrl('/404'), EMPTY);
        }),
    );

    returnWindowHistory(): void {
        this.router.navigateByUrl('/content-list');
    }
}
