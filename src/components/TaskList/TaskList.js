// Імпортуємо хук
import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
// Імпортуємо об'єкт значень фільтра
import  statusFilters  from "../../redux/filters/constants,js";
import { getTasks} from "redux/tasks/selectors";
import { getStatusFilter } from "redux/filters/selectors";  
import * as SC from "./TaskList.styled";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // Отримуємо значення фільтра із стану Redux
  const statusFilter = useSelector(getStatusFilter);
  // Обчислюємо масив завдань, які необхідно відображати в інтерфейсі
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <SC.List>
      {visibleTasks.map(task => (
        <SC.Item key={task.id}>
          <Task task={task} />
        </SC.Item>
      ))}
    </SC.List>
  );
};