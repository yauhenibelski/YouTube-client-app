import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DetailedRoutingModule } from './detailed-routing.module';
import { PaintBorderBottomDirective } from '../../shared/directives/paint-border-bottom/paint-border-bottom.directive';
import { StatisticsComponent } from '../../shared/components/statistics/statistics.component';
import { DetailedPageComponent } from './detailed-page.component';

@NgModule({
    declarations: [DetailedPageComponent],
    imports: [
        DetailedRoutingModule,
        MatCardModule,
        PaintBorderBottomDirective,
        StatisticsComponent,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        CommonModule,
    ],
    exports: [DetailedPageComponent],
})
export class DetailedModule {}
