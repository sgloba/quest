import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

export interface PostI {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit{

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<PostI[]> {
    return this.http.get<PostI[]>('https://jsonplaceholder.typicode.com/posts');
  }

  ngOnInit() {

  }
}
