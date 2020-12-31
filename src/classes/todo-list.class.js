
export class TodoList {

    constructor () {
        // this.todos = [];
        this.cargasLocalStorage();
    }

    nuevoTodo ( todo ) {
        this.todos.push( todo );
        this.guradarLocalStorege();
    }

    eliminarTodo ( id ) {
        
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guradarLocalStorege();

    }

    marcarCompletado ( id ) {

        for ( const todo of this.todos) {

            if( todo.id == id ) { // el doble igual es para comparar string con number
                todo.completado = !todo.completado;
                this.guradarLocalStorege();
                break;
            }
        }
    }

    eliminarCompletados () {

        this.todos = this.todos.filter(todo => !todo.completado); //filter devuelve un array nuevo con todos los que cumplan la condicion
        this.guradarLocalStorege();
    }

    guradarLocalStorege () {

        localStorage.setItem('todo', JSON.stringify(this.todos)); //JSON.stringify es para trasformar el objeto en un json y asi porder manipularlo en localStorage
    }

    cargasLocalStorage () {

        ( localStorage.getItem('todo') ) ? this.todos = JSON.parse(localStorage.getItem('todo')) : this.todos = []; //JSON.parse es para volver ese string json a el objeto normal que era antes de pasar por JSON.stringify
    }
} 