import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PostPayload} from "../add-post/postPayload";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() alertI: PostPayload;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  public alertClick(id: String) {
    alert("Id: " + id);
    this.notify.emit();
  }

}
