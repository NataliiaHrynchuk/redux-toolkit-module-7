import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "redux/tasks/actions";
import * as SC from "./TaskForm.styled";

export const TaskForm = () => {
    //отримуємо посилання на ф-цію відправки екшенів
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        //Викликаємо генератор екшену та передаємо текст завдання для поля payLoad
        //Відправляємо результат - екшен створення завдання
        dispatch(addTask(form.elements.text.value));
        form.reset();
    };
    
    return (
        <SC.Form onSubmit={handleSubmit}>
            <SC.Field
                type="text"
                name="text"
                placeholder="Enter task text..."
            />
            <Button type="submit">Add task</Button>
        </SC.Form>
    );
};