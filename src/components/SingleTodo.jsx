import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();

  // SİL BUTONUNA TIKLANIRSA ÇALIŞIR
  const handleDelete = () => {
    // apiyi günceller
    axios.delete(`http://localhost:3030/todos/${todo.id}`).then(() => {
      // store' u günceller
      dispatch({
        type: 'DEL_TODO',
        payload: todo.id,
      });
    });
  };

  // TAMAMLA BUTONUNA TIKLANIRSA ÇALIŞIR
  const handleEdit = () => {
    // elemanı güncelleme
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    // veritabanını günceller
    axios.put(`http://localhost:3030/todos/${todo.id}`, updatedTodo).then(() => {
      // storeu güncelliyor
      dispatch({
        type: 'EDIT_TODO',
        payload: todo.id,
      });
    });
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{todo.text}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {todo.isDone ? 'Tamamlandı' : 'Devam Ediyor'}
        </h6>
        <p className="card-text">{new Date(todo.date).toLocaleDateString()}</p>
        <a className="card-link" onClick={handleEdit}>
          {/*  isDone değeri true ise butonun içinde geri al değile tamamla yazsın */}
          {todo.isDone ? 'Geri Al' : 'Tamamla'}
        </a>
        <a className="card-link" onClick={handleDelete}>
          Sil
        </a>
      </div>
    </div>
  );
};

export default SingleTodo;
