import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';

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
      created_at: new Date
    },
    {
      id: 2,
      title: 'Veggie 2',
      content: 'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.',
      loveIts: 12,
      created_at: new Date
    },
    {
      id: 3,
      title: 'Veggie 3',
      content: 'Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.',
      loveIts: -2,
      created_at: new Date
    },
    {
      id: 4,
      title: 'Veggie 4',
      content: 'Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea.',
      loveIts: 21,
      created_at: new Date
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

  createNewPost() {

  }

  removePost() {

  }

  constructor() { }
}
