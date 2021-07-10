import { NewsService } from './../../../shared/services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {
  news=[]

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe((news)=>{
      this.news = news;
    })
  }


  remove(id:any){
    this.newsService.delete(id).subscribe(()=>{
   this.ngOnInit()
    })
  }

}
