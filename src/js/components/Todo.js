import React, {useState} from "react";

const Todo = ({todo, markAsDone, deleteTodo}) => {

    const handleMarkAsDone = (event) => {
        markAsDone(todo.id);
    }
    
    const handleDeleteTodo = (event) => {
        deleteTodo(todo.id);
    }

    return (

            <tr className={todo.status === 'done' ? 'table-secondary' : ''}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>
                    {todo.status === 'pending' && (
                        <a href="#"
                           className="text-primary"
                           onClick={handleMarkAsDone}>Done</a>
                    )}
                    {todo.status == 'done' && (
                        <a href="#"
                           className="text-danger"
                           onClick={handleDeleteTodo}>Delete</a>
                    )}
                </td>
            </tr>
        
    )
}

export default Todo;