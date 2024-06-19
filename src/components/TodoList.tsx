import './TodoList.scss';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            {todos.map((item) => (
                <SingleTodo
                    item={item}
                    key={item.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    )
}
export default TodoList;