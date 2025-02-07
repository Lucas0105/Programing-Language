import axios from 'axios';

interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then(response => {
    const tood = response.data as Todo;

    const id = tood.id;
    const title = tood.title;
    const completed = tood.completed;

    logTodo(id, title, completed);
});

const logTodo = (id:number, title:string, completed:boolean) => {

    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
         `)
}