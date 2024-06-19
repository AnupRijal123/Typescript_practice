import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Todo } from '../model';
import './SingleTodo.scss';

type Props = {
    item: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ item, todos, setTodos }: Props) => {
    console.log(item);
    const handleCheck = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    }

    const handleDelete = (id: number) => {
        console.log(id)
        setTodos(todos.filter((item) => item.id !== id));
    }

    return (
        <form className='single-todo-container'>
            {item.isCompleted ? (
                <s>{item.todo}</s>
            ) : (
                <p>{item.todo}</p>
            )}
            <div className="icons-div">
                <FaEdit className="icons" />
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