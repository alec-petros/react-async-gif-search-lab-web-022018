import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const url = "http://api.giphy.com/v1/gifs/search?q="
const api_key = "&api_key=dc6zaTOxFJmzC"

class GifListContainer extends React.Component {

  state = {
    gifs: [],
    search: ""
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  fetchSearch = (e) => {
    e.preventDefault()
    fetch(url + this.state.search + api_key).then(r => r.json()).then(json => this.setState({gifs: json.data.slice(0, 3)}))
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch handleChange={this.handleChange} value={this.state.search} search={this.fetchSearch} />
      </div>
    )
  }
}

export default GifListContainer
