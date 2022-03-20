import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos
        = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});
    const dispatch = useDispatch();
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }

    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }


    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            input checked={todo.done}
                            onChange={(event) =>
                            updateTodoClickHandler(
                                {...todo,
                                    done: event.target.checked})}
                            type="checkbox"/>
                            {todo.do}
                            <button onClick={() =>
                                deleteTodoClickHandler(todo)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li> ) }
            </ul>
        </>
    );
};
export default Todos;
