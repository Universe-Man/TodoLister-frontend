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
    return(
      <div className="ListDisplay">
        <PendingItems list={this.props.list}/>
        <CompletedItems list={this.props.list}/>


      </div>
    )
  }
}

export default ListDisplay;
