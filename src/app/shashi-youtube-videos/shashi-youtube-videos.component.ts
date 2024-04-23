import { Component, OnInit } from '@angular/core';
import videoIds from './links.json';
import { GenericService } from '../generic.service';
import { YoutubeData } from '../YoutubeData';



@Component({
  selector: 'app-shashi-youtube-videos',
  templateUrl: './shashi-youtube-videos.component.html',
  styleUrls: ['./shashi-youtube-videos.component.css']
})
export class ShashiYoutubeVideosComponent implements OnInit {
  value: string = '';



  embeddedUrlList: any[] = [];

  constructor(
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {

    // this.getData();
    // console.log('video Ids', videoIds);
    videoIds.forEach((element: any) => {
      let url = 'https://www.youtube.com/embed/' + element + '?mute=1';
      this.embeddedUrlList = [...this.embeddedUrlList, url];
    });
    // console.log('embeddedUrlList', this.embeddedUrlList);
  }

  getData(){
    this._genericService.getVideos().subscribe((data: any) => {
      console.log('db:',data);
    })
  }

  submit() {
    console.log('value: ', this.value)
    let videoId: string = '';
    if (this.value.includes('youtube.com')) {

    } else {
      videoId = this.value;
    }
    const params: YoutubeData = {
      id: Math.floor(Math.random() * 1000) + 1,
      videoId: videoId
    }
    this._genericService.createVideo(params).subscribe((data: any) => {
      console.log('video id added: ', videoId);
      this.getData();
    })
  }

}
