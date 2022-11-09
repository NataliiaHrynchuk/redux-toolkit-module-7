// Імпортуємо хук
import { useSelector, useDispatch } from "react-redux";
import { Button } from "components/Button/Button";
// Імпортуємо об'єкт значень фільтра
import { statusFilters } from "redux/constants";
import { selectStatusFilter } from "redux/selectors";
//Імпортуємо генератор екшену
import { setStatusFilter } from "redux/filterSlice"; 
import * as SC from "components/StatusFilter/StatusFilter.styled";

export const StatusFilter = () => {
  //отримуємо посилання на ф-цію відправки екшенів
  const dispatch = useDispatch();

  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(selectStatusFilter);

  //Викликаємо генератор екшену та передаємо значення фільтра
  //Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <SC.Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >Completed
      </Button>
    </SC.Wrapper>
  );
};