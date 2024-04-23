import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { YoutubeData } from './YoutubeData';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    let videos: YoutubeData[] = [
      { 'id': 1, 'videoId': "HgPeac-CIAc" }
    ];
    return { videos };
  }
}
