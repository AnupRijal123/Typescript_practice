import './InputField.scss';
import { useRef } from 'react';
interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (event: React.FormEvent) => void
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="input-field" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();//this removes focus from input
        }}>
            <input
                type="text"
                placeholder="Enter task"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                ref={inputRef}
            />
            <button type="submit">Save</button>
        </form>

    )
}
export default InputField;