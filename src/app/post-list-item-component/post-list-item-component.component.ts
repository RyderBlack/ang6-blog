import { Component, OnInit,Input } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() loveIts: number;
  
  posts: any[];
  postsSubscription: Subscription;

  constructor(private postsService : PostServiceService) { }

  ngOnInit() {
    this.postsService.emitAppareilSubject();
  }

  onAddLoveIts() {
    this.loveIts++;
    this.postsService.addLoveIts();
  }

  onDeleteLoveIts() {
    this.loveIts--;
    this.postsService.deleteLoveIts();
  }

  onDeletePost() {}
}
