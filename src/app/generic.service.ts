import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YoutubeData } from './YoutubeData';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getVideos(){ 
       return this.httpClient.get(this.SERVER_URL + 'videos');
  }

  public createVideo(video: YoutubeData){
      return this.httpClient.post(`${this.SERVER_URL + 'videos'}`, video)
  }

}
