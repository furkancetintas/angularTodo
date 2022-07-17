import { Component, OnInit } from '@angular/core';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angularTodo';

  todos: TodoModel[] = [];
  newTodo: string;

  ngOnInit(): void {
    this.getItems();
  }

  saveTodo() {
    if (this.newTodo) {
      let todo = new TodoModel();
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      console.log(todo.isCompleted);
      this.newTodo = "";
    } else {
      alert("Lütfen yapılacak listesine bir şeyler yazın")
    }
  }

  done(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  removeTodo(id: number) {
    let index = this.todos.findIndex(e => e.id === id);
    console.log("çalıştı");
    if (index !== 1) {
      this.todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    localStorage.removeItem(id.toString());
    return this.todos;
  }

  getItems() {
    const ls: any = localStorage.getItem("todos");
    this.todos = JSON.parse(ls)
    console.log(this.todos);
    return this.todos;
  }

}
