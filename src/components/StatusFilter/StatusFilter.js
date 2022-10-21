// Імпортуємо хук
import { useSelector, useDispatch} from "react-redux";
// Імпортуємо об'єкт значень фільтра
import statusFilters from "../../redux/filters/constants,js";
//Імпортуємо генератор екшену
import { setStatusFilter } from "redux/filters/actions"; 
import { Button } from "components/Button/Button";
import { getStatusFilter } from "redux/filters/selectors";
import * as SC from "./StatusFilter.styled";

export const StatusFilter = () => {
  //отримуємо посилання на ф-цію відправки екшенів
  const dispatch = useDispatch();

  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(getStatusFilter);

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