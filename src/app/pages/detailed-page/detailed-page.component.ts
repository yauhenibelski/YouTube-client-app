import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Content } from '@interface/content.interface';
import { YoutubeApiService } from '@shared/services/youtube-api/youtube-api.service';

@Component({
    selector: 'app-detailed-page',
    templateUrl: './detailed-page.component.html',
    styleUrl: './detailed-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedPageComponent {
    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly youtubeApiService: YoutubeApiService,
    ) {}

    readonly content$: Observable<Content | undefined> = this.activatedRoute.paramMap.pipe(
        switchMap(params => {
            const id = params.get('id');

            return this.youtubeApiService.getContentById(`${id}`).pipe(
                map(contentItems => contentItems?.at(0)),
                tap(content => content || this.router.navigateByUrl('/404')),
            );
        }),
    );

    returnWindowHistory(): void {
        this.router.navigateByUrl('/content-list');
    }
}
