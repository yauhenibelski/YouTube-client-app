import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubePageComponent } from './youtube-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: YoutubePageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class YoutubeRoutingModule {}
