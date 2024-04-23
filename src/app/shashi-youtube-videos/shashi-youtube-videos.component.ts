import { Component, OnInit } from '@angular/core';
import videoIds from './links.json';




@Component({
  selector: 'app-shashi-youtube-videos',
  templateUrl: './shashi-youtube-videos.component.html',
  styleUrls: ['./shashi-youtube-videos.component.css']
})
export class ShashiYoutubeVideosComponent implements OnInit {

  embeddedUrlList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('video Ids', videoIds);
    videoIds.forEach((element:any) => {
      let url = 'https://www.youtube.com/embed/'+element+'?mute=1';
      this.embeddedUrlList = [...this.embeddedUrlList, url];
    });
    console.log('embeddedUrlList', this.embeddedUrlList);
  }

}
