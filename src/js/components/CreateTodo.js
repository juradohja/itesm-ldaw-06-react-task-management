import React, {useState} from "react";

const CreateTodo = (addTodo) => {

    const [newTodoDesc, setNewTodoDesc] = useState('');

    const handleNewTodoChange = (event) => {
        setNewTodoDesc(event.target.value);
    }

    const handleAddTodo = (event) => {
        addTodo(newTodoDesc);
        setNewTodoDesc('');
    }

    return (
        <div className="row mb-3">
            <div className="col-lg-12"><div className="input-group w-100">
                    <input type="text"
                           name="description"
                           id="taskDescription"
                           placeholder="I have to..."
                           className="form-control"
                           onChange={handleNewTodoChange}/>
                    <div className="input-group-append">
                        <input type="button"
                               value="Add"
                               className="btn btn-primary"
                               onClick={handleAddTodo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTodo;