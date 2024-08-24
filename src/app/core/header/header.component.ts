import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SwitchFilterBlockViewService } from '@shared/services/switch-filter-block-view/switch-filter-block-view.service';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, SearchComponent, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    constructor(private readonly switchFilterBlockViewService: SwitchFilterBlockViewService) {}

    switchFilterBlockView(): void {
        this.switchFilterBlockViewService.toggleView();
    }
}
