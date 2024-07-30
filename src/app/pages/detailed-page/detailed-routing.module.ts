import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPageComponent } from './detailed-page.component';

const routes: Routes = [
    {
        path: ':id',
        pathMatch: 'full',
        component: DetailedPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailedRoutingModule {}
