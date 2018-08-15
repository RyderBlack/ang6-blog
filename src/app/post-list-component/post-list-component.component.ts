import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  @Input() posts : any[];
  postsSubscription: Subscription;
  
  constructor(private postsService : PostServiceService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitAppareilSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
