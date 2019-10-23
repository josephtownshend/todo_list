import React from 'react';

export default props => (
  <div
    style={{
      textDecoration: 'line-through'
    }}
    onClick={props.toggleComplete}
  >
    {props.todo.text}
  </div>
);
