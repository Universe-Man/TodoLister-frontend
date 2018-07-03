import React from 'react';
import '../../src/App.css'

class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <form className='SearchBar' >
        <input type='text' className='SearchBar-input' placeholder='Search Lists' onChange={this.props.getSearchTerm}></input>


      </form>
    )
  }
}

export default SearchBar;
