import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml, totalTodoPendientes } from './js/componentes';

export const todoList = new TodoList(); 

todoList.todos.forEach(todo => crearTodoHtml( todo )); //Imprimir todo el objeto ToDo del localStore

totalTodoPendientes();