import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  x:number = 4 ;

  constructor(){
  }

  ngOnInit(){
    const observer = {
     next: x => { setInterval(()=> {console.log('Next value provided by observer ')},1000)},
     error: err => {console.log('error provided by observer '+ err);},
     complete: () => {console.log('Observer completed');}
   }
   const obser = new Observable();
   obser.subscribe(observer);
   
  }
}
