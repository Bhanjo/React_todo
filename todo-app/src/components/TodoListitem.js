import React from 'react';
import{
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames'; // 조건부 스타일링
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove }) => {
    const { id, text, checked } = todo;

    return(
        <div className="TodoListItem">
            {/* 조건부 스타일링 */}
            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            {/* 버튼을 클릭하면 onRemove 함수에 id를 넣어 호출 */}
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;