import React from 'react';

class GifSearch extends React.Component {

  render() {
    return (
      <form>
        <input value={ this.props.value } onChange={ this.props.handleChange } /><br></br>
        <button onClick={ this.props.search } >Search</button>
      </form>
    )
  }
}

export default GifSearch
