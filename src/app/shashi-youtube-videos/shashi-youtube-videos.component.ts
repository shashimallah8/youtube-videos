import { Component, OnInit } from '@angular/core';
import videoIdsData from './links.json';




@Component({
  selector: 'app-shashi-youtube-videos',
  templateUrl: './shashi-youtube-videos.component.html',
  styleUrls: ['./shashi-youtube-videos.component.css']
})
export class ShashiYoutubeVideosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('video Ids', videoIdsData);
    console.log('in init')
  }

}
