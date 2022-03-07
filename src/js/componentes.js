
//  Referencias en el HTML 

import { todoList } from "../index";
import { Todo, TodoList } from "../class";

//  Html References
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnErase = document.querySelector('.clear-completed');
const ulFilter = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro')


export const createTodoHtml = (todo) => {
    
    const htmlTodo = `
    <li class="${(todo.complete) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.complete) ? 'checked': ''}>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}


// Events

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {

        const nuevoTodo = new Todo(txtInput.value);
        todoList.newTodo(nuevoTodo);
        createTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
})

divTodoList.addEventListener('click', (event) => {
    
    const nameElement = event.target.localName;
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    // console.log(todoElement);
    // console.log(todoId)
    if( nameElement.includes('input')){
        todoList.toggleTodo(todoId);
        todoElement.classList.toggle('completed')
    }else if (nameElement.includes('button')){

        todoList.eraseTodo(todoId);
        divTodoList.removeChild(todoElement)
    }

    console.log(todoList)

});

btnErase.addEventListener('click', () => {

    todoList.eraseCompletedTodo();

    for( let i = divTodoList.children.length - 1; i >= 0; i--) {

        const element = divTodoList.children[i];

        if(element.classList.contains('completed')){
            divTodoList.removeChild(element)
        }

    }
})

ulFilter.addEventListener('click', (event) => {

    const filter = event.target.text;
    
    if(!filter){
        return;
    } 

    anchorFilters.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected')


    for(const element of divTodoList.children){

        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');

        switch(filter){
            case 'Pendientes':
                if(completed){
                    element.classList.add('hidden');
                }
            break;
            case 'Completados':
                if(!completed) {
                    element.classList.add('hidden')
                }
            break;
        }

    }

    
})