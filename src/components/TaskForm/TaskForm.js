import { Button } from "components/Button/Button";
import * as SC from "./TaskForm.styled";

export const TaskForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
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