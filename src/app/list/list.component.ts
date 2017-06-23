import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { DELETE_TODO, TOGGLE_DONE, UPDATE_TODO } from '../reducers/todo.reducer';
import { MdDialog, MdDialogRef } from '@angular/material';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  editing = false;
  indexToEdit: number | null;
  items: Observable<any>;
  todoName: string;

  constructor(
    public dialog: MdDialog,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.items = this.store.select('todoReducer')
  }
  removeItem = function (index) {
    this.store.dispatch({ type: DELETE_TODO, payload: index });
  }

  editTodo(object, index) {
    this.todoName = object.todo;
    let dialogRef = this.dialog.open(EditTodo);
    dialogRef.componentInstance.todo = this.todoName;

    dialogRef.afterClosed().subscribe(todo => {

      if (todo) {
        this.updateTodo(todo,index);

      }
    });
  }
  updateTodo(updatedTodo,index) {
    console.log("fvsfvsf",index)
    console.log("updatedTodo",updatedTodo)
    this.store.dispatch({ type: UPDATE_TODO, payload: { index: index, newValue: updatedTodo.todo } });
    this.indexToEdit = null;
  }
  toggleDone(ttodo, index) {
    this.store.dispatch({ type: TOGGLE_DONE, payload: { index:index, done: ttodo.done } });
  }

  d: string = moment().format("MM-DD-YY HH:mm");
}


@Component({
  selector: 'edit-todo',
  templateUrl: './dialog.component.html'
})

export class EditTodo {
  todo: string;
  constructor(
    public dialogRef: MdDialogRef<EditTodo>
  ) { }
}
