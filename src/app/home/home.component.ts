import {Component, OnInit} from '@angular/core';
import {AddPostService} from "../add-post.service";
import {PostPayload} from "../add-post/postPayload";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Observable<Array<PostPayload>>;

  constructor(private postsService: AddPostService) {
  }

  ngOnInit(): void {
    this.posts = this.postsService.getAll();
  }

}
