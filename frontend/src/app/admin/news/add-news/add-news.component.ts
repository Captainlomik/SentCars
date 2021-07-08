import { NewsService } from './../../../shared/services/news.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  
  @ViewChild('input', { static: false }) inputRef: ElementRef

addForm:FormGroup;
image: File
imagePreview=''
response;
imageSrc: string

  constructor(
    private newsServices: NewsService
  ) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      title:new FormControl('', Validators.required),
      content:new FormControl('', Validators.required),
      file: new FormControl('')
    })
  }

  triggerClick() {
    this.inputRef.nativeElement.click()
  }

  onFileUpload(event: any) {
    this.image= event.target.files[0]

  }

  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.addForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }

  submit(){
    console.log(this.image)
   
    const news: News = {
      title : this.addForm.value.title,
      content: this.addForm.value.content,
      news_date:new Date(),
      cover:this.image ? this.imageSrc : null,
      publish:true
    }

    console.log(news)
    this.newsServices.create(news).subscribe((res)=>{
      // this.response = res;
      // this.imageUrl = `${this.DJANGO_SERVER}${res.cover}`;
      console.log('done')
      this.addForm.reset();
      
    })
  }
}
