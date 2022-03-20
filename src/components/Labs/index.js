import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./Styles/ConditionalOutput";
import TodoList from "./Todo/TodoList.js";
import ReduxExamples from "./redux-examples";


const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
            <ReduxExamples/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;

