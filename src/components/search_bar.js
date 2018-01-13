import React, { Component } from 'react';

//functional component
// const SearchBar = () => {
//   return <input />;
// };

//class based component
//only class based components have state
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'Init' };
  }
  //all class based components should have a render method
  render() {
    return (
      //except the constructor func, always use this.setState.
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
    //Value of the input: {this.state.term}
  }
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
