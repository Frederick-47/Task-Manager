import { Todo } from "./todo.class";

export class TodoList {

    constructor(){

        // this.todos = [];
        this.loadLocalStorage();


    }
    newTodo(todo){
        this.todos.push(todo);
        this.saveLocalStorage();
    }

    eraseTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id)
        this.saveLocalStorage();

    }

    toggleTodo(id){

        for(const todo of this.todos){

            console.log(id, todo.id)
            if(todo.id == id){
                todo.complete = !todo.complete;
                this.saveLocalStorage();
                break;
            }
        }
    }

    eraseCompletedTodo(){
        
        this.todos = this.todos.filter(todo => !todo.complete);
        this.saveLocalStorage();
    }


    saveLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    loadLocalStorage(){

        this. todos = (localStorage.getItem('todo') ? (this.todos = JSON.parse(localStorage.getItem('todo'))) : [] );

        this.todos = this.todos.map(obj => Todo.fromJson(obj))
        
    }

}