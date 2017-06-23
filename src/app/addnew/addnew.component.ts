import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_DONE, todoReducer }
  from '../reducers/todo.reducer';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {


  editing = false;
  indexToEdit: number | null;
  title = 'ToDo List';
  items: Observable<any>;
  todo = "";
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.items = this.store.select('todoReducer');
  }
  pushItem(todo) {
    console.log(todo);
    this.store.dispatch({ type: ADD_TODO, payload: { todo } });
    this.todo = "";
  }
  checkEnter(todo) {
    this.pushItem(todo);
  }
}
