import React from 'react';
import SearchBar from './SearchBar'
import SideBar from './SideBar'
import ListDisplay from './ListDisplay'


class ListContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerm: "",
      lists: [],
    }
  }

  getSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  createNewList = (listName) => {
    let currentLists = [...this.state.lists, listName]
    this.setState({
      lists: currentLists
    })
  }

  filterLists = () => {
    return this.state.lists.filter(list => list.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  displayCurrentList = (list) => {
    // console.log('oh hi there!');
   console.log('this is the list I clicked on and want to send to display', list);
    return list;
  }

  render(){
    return(
      <div>
        <SearchBar getSearchTerm={this.getSearchTerm}/>
        <SideBar lists={this.filterLists()} createNewList={this.createNewList} displayCurrentList={this.displayCurrentList}/>
        <ListDisplay list={this.displayCurrentList()}/>
      </div>
    )
  }
}

export default ListContainer;
