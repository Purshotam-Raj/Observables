import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})

export class TodoService{

    arr = [{userId: 101, id: 1, title: 'Fretron task', completed: true }];
    constructor( private http: HttpClient){
    }

    getData(){
        let obser = this.http.get('https://jsonplaceholder.typicode.com/todos');
        return obser;
    }
}