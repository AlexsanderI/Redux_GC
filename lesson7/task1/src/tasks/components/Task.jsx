import React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const Task = ({ id, text, done, onChange, onDelete }) => {
  const ListItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={ListItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
    </li>
  );
};

Task.proptypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  done: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
