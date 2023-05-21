import { useSelector } from 'react-redux';
import SingleTodo from './SingleTodo';

const ListTodos = () => {
  // storedaki verilere aboneolma işlemi
  const { todoState } = useSelector((state) => state);

  return (
    <div className="row justify-content-center justify-content-md-between gap-5 p-4">
      {todoState.todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}
    </div>
  );
};
export default ListTodos;
