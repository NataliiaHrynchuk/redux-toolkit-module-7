import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "redux/operations";
import * as SC from "components/TaskForm/TaskForm.styled";

export const TaskForm = () => {
    //отримуємо посилання на ф-цію відправки екшенів
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
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