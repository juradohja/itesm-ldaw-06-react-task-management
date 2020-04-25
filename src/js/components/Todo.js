import React from "react";

const Todo = ({todo, markAsDone, deleteTodo}) => {

    const handleMarkAsDone = (_event) => {
        markAsDone(todo.id);
    };
    
    const handleDeleteTodo = (_event) => {
        deleteTodo(todo.id);
    };

    return (

            <tr className={todo.status === 'done' ? 'table-secondary' : ''}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>
                    {todo.status === 'pending' && (
                        <button
                                className="btn btn-link"
                                onClick={handleMarkAsDone}>Done</button>
                    )}
                    {todo.status === 'done' && (
                        <button
                                className="btn btn-link text-danger"
                                onClick={handleDeleteTodo}>Delete</button>
                    )}
                </td>
            </tr>
        
    )
};

export default Todo;