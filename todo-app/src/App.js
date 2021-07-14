import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  // 나중에 추가할 일정 항목에 대한 state
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 공부',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 공부',
      checked: true,
    },
    {
      id: 3,
      text: 'Todo List 제작',
      checked: false,
    },
  ]);

  return (
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    );
};

export default App;
