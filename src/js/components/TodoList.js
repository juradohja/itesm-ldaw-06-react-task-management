import React, {useState} from "react";
import Todo from './Todo';

const TodoList = ({todos, markAsDone, deleteTodo}) => {
    
    return (
        <div className="row">
            <div className="col-lg-12" id="taskList">
                <table className="table table-hover">
                    <thead className={"thead-dark"}>
                        <tr>
                            <th scope={"col"}>#</th>
                            <th scope={"col"}>Description</th>
                            <th scope={"col"}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, i) => {
                            return (
                                <Todo todo={todo} markAsDone={markAsDone} deleteTodo={deleteTodo}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList;