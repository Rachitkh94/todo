import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppbackgroundComponent } from './appbackground/appbackground.component';
import { HttpModule } from '@angular/http';
import { AddnewComponent } from './addnew/addnew.component';
import { ListComponent, EditTodo } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from "./reducers/todo.reducer"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AppbackgroundComponent,
    AddnewComponent,
    ListComponent,
    EditTodo,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MaterialModule,
    StoreModule.provideStore({
      todoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditTodo]
})
export class AppModule { }
