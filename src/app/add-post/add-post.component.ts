import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostPayload} from "./postPayload";
import {AddPostService} from "../add-post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  postPayload: PostPayload;

  constructor(private addPostService: AddPostService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
    })

    this.postPayload = {
      id: '',
      title: '',
      content: '',
      username: ''
    }
  }

  ngOnInit(): void {
  }

  public addPost(a: PostPayload) {
    alert(a.title);
    this.postPayload.title = this.addPostForm.get('title').value;
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.username = localStorage.getItem('username');

    this.addPostService.addPost(this.postPayload).subscribe(
      data => {
        console.log("Add Post");
        this.router.navigateByUrl("/home");
      },
      error => {
        console.log("Failed to add post");
      }
    );
  }

}
