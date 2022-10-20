// Імпортуємо хук
import { useSelector } from "react-redux";
// Імпортуємо об'єкт значень фільтра
import  statusFilters  from "../../redux/filters/constants,js";
import { Button } from "components/Button/Button";
import { getStatusFilter } from "redux/filters/selectors";
import * as SC from "./StatusFilter.styled";

export const StatusFilter = () => {
  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(getStatusFilter);

  return (
    <SC.Wrapper>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </SC.Wrapper>
  );
};