import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShashiYoutubeVideosComponent } from './shashi-youtube-videos/shashi-youtube-videos.component';

const routes: Routes = [
  {
    path: 'watch-videos',
    component: ShashiYoutubeVideosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
