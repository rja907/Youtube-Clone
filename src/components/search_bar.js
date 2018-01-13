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
    this.state = { term: '' };
  }
  //all class based components should have a render method
  render() {
    return (
      //except the constructor func, always use this.setState.
      <div>
        <img className="logo" src={'https://i.imgur.com/1FuQpgi.png'} />

        <input
          className="sb"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
    //Value of the input: {this.state.term}
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
