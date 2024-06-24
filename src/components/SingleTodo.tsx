import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Todo } from '../model';
import './SingleTodo.scss';
import { useState, useRef, useEffect } from 'react';

type Props = {
    item: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ item, todos, setTodos }: Props) => {
    console.log(item);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(item.todo);
    const editRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        console.log(editRef.current);
        editRef.current?.focus();

    }, [isEdit]);

    const iconDiv = document.querySelector('.icons-div');
    console.log(iconDiv);
    const handleClick = (event: Event) => {
        console.log(event.target);
        if (iconDiv?.contains(event.target as Node)) {
            console.log('clicked inside')
        } else {
            console.log('clicked outside')
            setIsEdit(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleClick);
        return window.removeEventListener('click', handleClick)
    }, []);
    const handleCheck = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    }

    const handleDelete = (id: number) => {
        console.log(id)
        setTodos(todos.filter((item) => item.id !== id));
    }

    const handleEdit = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        console.log(editTodo);
        const newArray = todos.map((t) => t.id === item.id ? { ...t, todo: editTodo } : t);
        setTodos(newArray);
        setIsEdit(false);

    }

    return (
        <form className='single-todo-container' onSubmit={handleEdit}>
            {isEdit === false && (
                item.isCompleted ? (
                    <s>{item.todo}</s>
                ) : (
                    <p>{item.todo}</p>
                )
            )}

            {isEdit &&

                <input
                    type="text"
                    value={editTodo}
                    onChange={(event) => setEditTodo(event.target.value)}
                    ref={editRef}
                />
            }
            <div className="icons-div">
                <FaEdit className="icons"
                    onClick={() => setIsEdit(!isEdit)} />
                <MdDelete className="icons"
                    style={{ color: 'red' }}
                    onClick={() => handleDelete(item.id)}
                />
                <FaCheck onClick={() => handleCheck(item.id)}
                    // className={item.isCompleted ? "icons completed" : "icons"}
                    //OR    
                    className={`icons ${item.isCompleted && 'completed'}`}
                />
            </div>
        </form>

    )

}

export default SingleTodo;