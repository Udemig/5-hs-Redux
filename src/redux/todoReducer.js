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
    // ekleme aksiyonu dispatch edilerse burası çalışır
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.payload],
      };

    // silme aksiyonu dispatch edilerse burası çalışır
    case 'DEL_TODO':
      // silinicek todonun idsine eşit olmayan diğer bütün todoları alır
      const filtredTodos = state.todos.filter((item) => item.id !== action.payload);
      // return kısmı storedaki verileri nasıl güncelleyeceiğimizi belirler
      return {
        todos: filtredTodos,
      };

    case 'EDIT_TODO':
      /* 
        splice > diziyi güncellemeye yarayan method
        splice istekleri 
          1. dizideki elmanın sırası
          2. kaçta eleman silicem
          3. silinen yerine ne gelicek

         yapılması gerek : güncellencek dizinin bir kopyasını oluştur 
      */
      const cloneTodos = state.todos;

      // dizideki elemanın sırasıNI BULMA
      const index = state.todos.findIndex((item) => item.id === action.payload);

      // elemanı güncelleme
      const updatedItem = { ...state.todos[index], isDone: !state.todos[index].isDone };

      // dizinin kopyası üzerinde güncelleme yapar
      cloneTodos.splice(index, 1, updatedItem);

      // store' u günceller
      return {
        todos: cloneTodos,
      };

    case 'CLEAR':
      return {
        todos: [],
      };

    case 'SET_TODOS':
      return {
        todos: action.payload,
      };

    // eğerki çalışan akiyonun yukarıda karşılığı yoksa store'u olduğu gibi bırakır
    default:
      return state;
  }
};

export default todoReducer;
