import { Component, DoCheck, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { map } from 'rxjs/operators';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit, DoCheck {

  arrs 
  flag = false;
  constructor(private todoService: TodoService) {
    
   }

  ngOnInit(): void {
    
  }
  ngDoCheck(){
    // this.arrs = this.todoService.getData();
  }
  getData(){
    this.todoService.getData().pipe().subscribe((resp) => {
      console.log(resp);
      this.arrs = resp;
    });
    this.flag = true;
  }

}
