import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient ) { }

  shortenURL(url)
  {
    return this.http.post('http://127.0.0.1:1234/shorten',{url},{headers:{'Content-Type':'application/json'}})
  }
}
