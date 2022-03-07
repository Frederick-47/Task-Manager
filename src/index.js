import './styles.css'
import{Todo,TodoList} from './class/index'
import { createTodoHtml } from './js/componentes';

export const todoList = new TodoList()

const newTodo = new Todo('Aprender Javascript');
console.log(todoList.todos)

// todoList.todos[0].imprimirClase()


newTodo.imprimirClase();



todoList.todos.forEach(element => {
    createTodoHtml(element)
});