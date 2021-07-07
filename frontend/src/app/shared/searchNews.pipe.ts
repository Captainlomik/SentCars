import { Pipe, PipeTransform } from "@angular/core";
import { News } from "./interfaces";

@Pipe({
    name:'searchNews'
})

export class SearchNewsPipe implements PipeTransform{
    transform(news:News[], search=''):News[] {
        return news.filter(news=>{
            return news.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
        })
        throw new Error("Method not implemented.");
    }
    
}