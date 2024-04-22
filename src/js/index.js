//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle


//import your own components
import { EditTodoForm } from "../Components/EditTodoForm";
import { Todo } from "../Components/Todo";
import { TodoForm } from "../Components/TodoForm";
import { TodoWrapper } from "../Components/TodoWrapper";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
