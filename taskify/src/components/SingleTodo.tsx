import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import'./styles.css';
import React, {useState} from "react";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}




const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        if (!edit) {
        setTodos(todos.map((todo: Todo) => {
            if(todo.id === id) {
                return {...todo, isDone: !todo.isDone};
            }
            return todo;
        }));
    }
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo: Todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo: Todo) => {
            if(todo.id === id) {
                return {...todo, todo: editTodo};
            }
            return todo;
        }));
        setEdit(false);
    }

    return (
        <form className="todo__single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input 
                value={editTodo} 
                onChange={(e) => setEditTodo(e.target.value)}
                className="todos__single-text"></input>
            ): todo.isDone ? (
                <s className="todos__single-text">{todo.todo}</s>
            ): (
                <span className="todos__single-text">{todo.todo}</span>
            )}
            
            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
}

export default SingleTodo;