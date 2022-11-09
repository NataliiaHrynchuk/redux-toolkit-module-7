// Імпортуємо хук
import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";

import { selectVisibleTasks} from "redux/selectors";
import * as SC from "components/TaskList/TaskList.styled";

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
  
  return (
    <SC.List>
      {tasks.map(task => (
        <SC.Item key={task.id}>
          <Task task={task} />
        </SC.Item>
      ))}
    </SC.List>
  );
};