import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted  } from "redux/operations";
import * as SC from "components/Task/Task.styled";

export const Task = ({ task }) => {
    //Отримуємо посилання на ф-цію відправки екшенів
    const dispatch = useDispatch();

    //Викликаємо генератор екшену та передаємо ідентифікатор завдання
    //Відправляємо результат - екшен видалення завдання
    const handleDelete = () => dispatch(deleteTask(task.id));

    //Викликаємо генератор екшену та передаємо ідентифікатор завдання
    //Відправляємо результат - екшен перемикання статусу завдання
    const handleToggle = () => dispatch(toggleCompleted(task));

    return (
        <SC.Wrapper>
            <SC.Checkbox
                type="checkbox"
                onChange={handleToggle}
                checked={task.completed}
            />
            <SC.Text>{task.text}</SC.Text>
            <SC.Button
                type="button"
            onClick={handleDelete}
            >
                <MdClose size={24} />
            </SC.Button>
        </SC.Wrapper>
    );
};