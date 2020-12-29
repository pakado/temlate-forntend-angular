import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostPayload} from "./add-post/postPayload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  private url: String = "http://localhost:8080/api/posts/";

  constructor(private httpClient: HttpClient) {
  }

  public addPost(postPayload: PostPayload) {
    // @ts-ignore
    return this.httpClient.post(this.url, postPayload)
  }

  public getAll(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>(this.url + "all");
  }

  public getById(id: Number): Observable<PostPayload> {
    return this.httpClient.get<PostPayload>(this.url + "" + id);
  }
}
