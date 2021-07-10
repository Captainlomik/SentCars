import { NewsService } from './../shared/services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../shared/interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = [] 
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe((news)=>{
      this.news = news;
      console.log(news)
    })
  }


}
