import React from 'react';
import './styles.css';

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const AddTodo: React.FC<InputFieldProps> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={
            (e) => {handleAdd(e) 
            inputRef.current?.blur();
        }}>
            <input 
            className='input__box'
            type="input" 
            placeholder='Enter a task' 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            ref={inputRef} />
            
            <button 
            type="submit" 
            className='input_submit'>Go</button>
        </form>
    );
};

export default AddTodo;
