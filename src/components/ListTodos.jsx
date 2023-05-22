import { useSelector } from 'react-redux';
import SingleTodo from './SingleTodo';
import { useDispatch } from 'react-redux';

const ListTodos = () => {
  const dispatch = useDispatch();
  // storedaki verilere aboneolma işlemi
  const { todoState } = useSelector((state) => state);

  // tümünü temizler
  const handleClear = () => {
    dispatch({
      type: 'CLEAR',
    });
  };

  return (
    <div className="row justify-content-center justify-content-md-between gap-5 p-4">
      <div className="d-flex justify-content-start">
        {todoState.todos.length > 0 ? (
          <button className="btn btn-danger btn-sm" onClick={handleClear}>
            Tümünü Sil
          </button>
        ) : (
          'Liste Boş'
        )}
      </div>

      {todoState.todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}
    </div>
  );
};
export default ListTodos;
