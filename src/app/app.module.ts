import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

import { ShashiYoutubeVideosComponent } from './shashi-youtube-videos/shashi-youtube-videos.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShashiYoutubeVideosComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    MatFormFieldModule, MatInputModule, FormsModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
