import { useSelector } from "react-redux";
import { selectTaskCount } from "redux/selectors";
import * as SC from "components/TaskCounter/TaskCounter.styled";

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  
  return (
    <div>
      <SC.Text>Active: {count.active}</SC.Text>
      <SC.Text>Completed: {count.completed}</SC.Text>
    </div>
  );
};