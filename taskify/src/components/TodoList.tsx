import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


interface Props {
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ setTodos}) => {
    const {data, isLoading, isError} = useQuery<Todo[]>({
        queryKey: ["fetchTodos"],
        queryFn: async() => {
            const {data} = await axios({
                method: "GET",
                url: "/api/todos",
            });
            return data as Todo[];
        },

    });

    return (
        <div className="todos">
            {(data?.length ?? 0) > 0 || !isLoading ? (
                data?.map((todo: Todo) => (
                    <SingleTodo key={todo.id} todo={todo} todos={data} setTodos={setTodos} />
                ))
            ) : null}
        </div>
    );
}


export default TodoList;