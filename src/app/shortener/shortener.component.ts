import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

  constructor( private urlService:HttpService ) { }

  form=new FormGroup({
    url:new FormControl('')
  })

  submit()
  {
    const url=this.form.value.url;
    this.urlService.shortenURL(url)
    .subscribe((res)=>{
      console.log(res)
    },(err)=>{

    })
  }

  get()
  {
    this.urlService.getData()
  }

  ngOnInit() {
  }

}
