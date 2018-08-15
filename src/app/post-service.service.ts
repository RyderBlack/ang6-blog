import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';
//import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  postsSubject = new Subject<any[]>();

  private posts = [
    {
      id: 1,
      title: 'Veggie 1',
      content: 'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
      loveIts: 0,
      created_at: Date.now()
    },
    {
      id: 2,
      title: 'Veggie 2',
      content: 'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.',
      loveIts: 12,
      created_at: Date.now()
    },
    {
      id: 3,
      title: 'Veggie 3',
      content: 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.',
      loveIts: -2,
      created_at: Date.now()
    },
    {
      id: 4,
      title: 'Veggie 4',
      content: 'Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea.',
      loveIts: 21,
      created_at: Date.now()
    }
  ];

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addLoveIts(i : number) {
    this.posts[i].loveIts++;
    this.emitPostSubject();
  }

  deleteLoveIts(i: number) {
    this.posts[i].loveIts--;
    this.emitPostSubject();
  }

  createNewPost(title: string,content: string) {
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: Date.now(),
    };

    postObject.id = this.posts[(this.posts.length -1)].id + 1;
    postObject.title = title;
    postObject.content = content;

    this.posts.push(postObject);
    this.emitPostSubject();
  }

  removePost(event) {
    const indexToRemove = this.posts.findIndex(
      (post) => {
        if(post.title == event.target.id) {
          return true;
        }
      }
    );


//const eventar = document.getElementById('post.id');
    this.posts.splice(indexToRemove, 1)
    this.emitPostSubject();
    
    
  }

  constructor() { }
}
