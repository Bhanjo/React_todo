import React from 'react';
import { MdAdd } from 'react-icons/md'; // {} 안에 원하는 아이콘의 이름을 입력하면 됨
import './TodoInsert.scss';

const TodoInsert = () => {
    return(
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;