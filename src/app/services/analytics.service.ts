import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PageNavigationInfo {
  url: string;
  date: Date;
}

const API_URL = 'http://localhost:3000/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) {
  }

  public log(pageLogData: PageNavigationInfo): Observable<PageNavigationInfo> {
    return this.http.post<PageNavigationInfo>(API_URL, pageLogData);
  }
}
