import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-youtube-list',
    standalone: true,
    imports: [],
    templateUrl: './youtube-list.component.html',
    styleUrl: './youtube-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeListComponent {}
