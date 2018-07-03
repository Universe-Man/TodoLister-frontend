import React from 'react';

const List = (props) => {
  debugger
  return(
    <div onClick={() => props.displayCurrentList(props.list)}>
      {props.list}
    </div>

  )
}

export default List;
