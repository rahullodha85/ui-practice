import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import React from "react";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
    return(
        <div className="todos"> 
        {todos.length > 0 ? (todos.map((todo: Todo) =>
                <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            )): null}
        </div>
    );
}

export default TodoList;