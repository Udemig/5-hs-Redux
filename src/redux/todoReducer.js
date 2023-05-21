/* 
    reducer yazma adımları:
    1. initialState > başlangıçStatei yazılır
    2- Bir FONKSİYON olan reducer yazılır:
        a- state ve action parametleri tanımlanır
    3- reducer export edilir
*/

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

export default todoReducer;
