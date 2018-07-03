import React from 'react';
import PendingItems from './PendingItems'
import CompletedItems from './CompletedItems'
import '../../src/App.css'


class ListDisplay extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    console.log('look at me', this.props.list);
    return(
      <div className="ListDisplay">
        <p>{this.props.list}</p>
        <PendingItems />
        <CompletedItems />


      </div>
    )
  }
}

export default ListDisplay;
