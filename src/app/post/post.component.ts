import {Component, OnInit} from '@angular/core';
import {PostPayload} from "../add-post/postPayload";
import {AddPostService} from "../add-post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: PostPayload;
  private id: Number;

  constructor(private router: ActivatedRoute, private postsService: AddPostService) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      params => {
        this.id = params['id'];
      })
    this.postsService.getById(this.id).subscribe(
      (data: PostPayload) => {
        this.post = data;
      },
      (error: any) => {
        console.log("Failed to load post id " + this.id);
      }
    );
  }
}
