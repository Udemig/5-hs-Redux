import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddForm = () => {
  // dispatch methodunu tanımlama
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // yeni bir todo objesi oluşturma
    const newTodo = {
      id: new Date().getTime(),
      text,
      isDone: false,
      date: new Date(),
    };

    // oluşturulan objeyi reducera sevk etme
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });

    // formu temizleme
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center my-4 px-5">
      <input
        className="form-control"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary">Ekle</button>
    </form>
  );
};

export default AddForm;
