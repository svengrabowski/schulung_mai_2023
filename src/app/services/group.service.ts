import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupItem } from '../shared/group-item';

const BASE_URL = 'http://localhost:3000/groups';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http: HttpClient) {
  }

  public create(group: GroupItem): Observable<{}> {
    return this.http.post<GroupItem>(BASE_URL, group);
  }

  public getAll(): Observable<GroupItem[]> {
    return this.http.get<GroupItem[]>(BASE_URL);
  }

  public get(id: number): Observable<GroupItem> {
    return this.http.get<GroupItem>(`${ BASE_URL }\${id}`);
  }
}
