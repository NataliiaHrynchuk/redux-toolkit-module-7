import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import * as SC from "./AppBar.styled";

export const AppBar = () => {
    return (
        <SC.Wrapper>
            <SC.Container>
                <SC.Title>Tasks</SC.Title>
                <TaskCounter/>
            </SC.Container>
            <SC.Container>
                <SC.Title>Filter by status</SC.Title>
                <StatusFilter/>
            </SC.Container>
        </SC.Wrapper>
    )
}