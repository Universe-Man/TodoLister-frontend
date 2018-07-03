import React from 'react';

const List = (props) => {
  return(
    <div onClick={() => {return props.displayCurrentList(props.list)}}>
      {props.list}
    </div>

  )
}

export default List;
