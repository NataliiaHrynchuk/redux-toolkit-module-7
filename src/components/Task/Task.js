import { MdClose } from "react-icons/md";
import * as SC from "./Task.styled";

export const Task = ({ task }) => {
    return (
        <SC.Wrapper>
            <SC.Checkbox
                type="checkbox"
                checked={task.completed}
            />
            <SC.Text>{task.text}</SC.Text>
            <SC.Button>
                <MdClose size={24} />
            </SC.Button>
        </SC.Wrapper>
    )
};