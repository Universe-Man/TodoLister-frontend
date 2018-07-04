import React from 'react';
import List from './List';
import UUID from 'uuid';
import '../assets/SideBar.css'

class SideBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newListClicked: false,
      listIds: []
    }
  }

  nameNewList = () => {
    this.setState({
      newListClicked: true,
      listName: ""
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('listIds old',this.state.listIds);
    // let newId = UUID()
    // let oldIds = this.state.listIds
    // let newIds = oldIds.push(newId)
    this.setState({
      newListClicked: false,
      // listIds: newIds
    })
    this.props.createNewList(this.state.listName)
  }

  getListName = (event) => {
    this.setState({
      listName: event.target.value
    })
  }

  getListId = () => {
    let newId = UUID()
  }


  render(){
    // console.log('id in the render', this.state.listId);
    let n = 0
    let allTheLists = this.props.lists.map(list => {
      return <List list={list} key={++n} displayCurrentList={this.props.displayCurrentList}/>
    })
    let allTheListsBackwards = allTheLists.reverse()

    return(
      <div className="SideBar">
        <button className="SideBar-button" onClick={this.nameNewList}>Create New List</button>
        <br></br>
        {this.state.newListClicked === true ? (
          <form onSubmit={this.handleSubmit} className='New-List-Form'>
            <input type='text' className='New-List-Form-Input' autoFocus='autofocus' placeholder='Name of New List' onChange={this.getListName}></input>
          </form>
        ) : (null)}
        <br></br>
        <div>{allTheListsBackwards}</div>




      </div>
    )
  }
}

export default SideBar;
