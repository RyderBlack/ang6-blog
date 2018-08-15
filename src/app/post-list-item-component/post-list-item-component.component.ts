import { Component, OnInit,Input } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Post } from '../models/post.model';

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
  @Input() index: number;
  

  constructor(private postsService : PostServiceService) { }

  ngOnInit() {
    this.postsService.emitPostSubject();
  }

  onAddLoveIts() {
    this.postsService.addLoveIts(this.index);
  }

  onDeleteLoveIts() {
    this.postsService.deleteLoveIts(this.index);
  }

  onDeletePost(event) {
    this.postsService.removePost(event);
  }
}
