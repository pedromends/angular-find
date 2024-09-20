import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {

  constructor(
    // here i could defined an http client, define some 
    // headers and make some rest api calls but the focus
    // here is to keep it simple so i saved my data inside
    // a array of objects
    
  ) { }

  items: any[] = []

  public post(data:any){
    this.items.push(data)
  }

  public put(data:any){
    console.log(data)
    var i = 0;
    while (i < this.items.length) {
      if (this.items[i].title === data.title) {
        this.items[i].time = data.time
      } else {
        ++i;
      }
    }
  }

  public get(){
    return this.items
  }

  public delete(data:any){
    var i = 0;
    while (i < this.items.length) {
      if (this.items[i].title === data.title) {
        this.items.splice(i, 1);
      } else {
        ++i;
      }
    }
  }
}
