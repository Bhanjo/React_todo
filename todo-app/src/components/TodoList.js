import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
    return(
        <div className="TodoList">
            {/* TodoListItem 컴포넌트들을 불러옴 */}
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;