import React from 'react';
import '../../src/App.css';
import Item from './Item';

class PendingItems extends React.Component {
  constructor(){
    super()
    this.state = {
      newTaskClicked: false,
      pendingTasks: [],
      taskName: ""
    }
  }

  makeNewTask = () => {
    this.setState({
      newTaskClicked: true
    })
  }

  addTask = (event) => {
    event.preventDefault()
    let theNewTask = this.state.taskName
    this.state.pendingTasks.push(theNewTask)
    this.setState({
      newTaskClicked: false,
      pendingTasks: this.state.pendingTasks
    })
  }

  getTaskName = (event) => {
    this.setState({
      taskName: event.target.value
    })
  }


  render(){
    let allListItems = this.state.pendingTasks.map(task => {
      return <Item item={task} />
    })
  return(
    <div className='PendingItems'>
      {(this.props.list === "") ? null :
      <div>
        <h3>{this.props.list}</h3>
        <button onClick={this.makeNewTask}>+ New Task</button>
        <br></br>
        {this.state.newTaskClicked === true ? (
          <form className='newTask-form' onSubmit={this.addTask}>
            <input type='text' className='newTask-form-input' placeholder='Enter New Task' autoFocus='autofocus' onChange={this.getTaskName}></input>
          </form>
        ) : (null)}
      </div> }
      {allListItems}


    </div>
  )
}
}

export default PendingItems;
