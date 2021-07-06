import { NewsService } from './../shared/services/news.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { News } from '../shared/interfaces';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  @Input() news:News[]= []
  news$:Observable<News>

  constructor(private route:ActivatedRoute, private newsService:NewsService) {
    this.news$ = this.route.params
      .pipe(switchMap((params: Params) => {
        let news = this.newsService.getById(params['id']);
        return news;
      }))
   }

  ngOnInit() {
  }

}
