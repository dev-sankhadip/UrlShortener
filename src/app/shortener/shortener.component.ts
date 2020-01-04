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

  public newURL=''

  submit()
  {
    const url=this.form.value.url;
    this.urlService.shortenURL(url)
    .subscribe((res)=>{
      console.log(res)
      this.newURL=res['newurl']
    },(err)=>{
      console.log(err)
    })
  }

  copy()
  {
    const text=document.getElementById("newurl").innerHTML;
    let input=document.createElement("input");
    input.setAttribute("hidden","true");
    document.body.appendChild(input);
    input.value=text;
    input.select();
    input.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("url copied");
  }

  ngOnInit() {
  }

}
