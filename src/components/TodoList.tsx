import './TodoList.scss';
import { Todo } from '../model';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            hasdas
        </div>
    )
}
export default TodoList;