function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        for(let i = 0; i < todos.length; i++){
            todos[i] = 'done - ' + todos[i];
    }
    return todos;
        return modifiedTodos
    }else{
        return modifiedTodos
    }
}
