import React from 'react';

class GifList extends React.Component {
  render() {

    const gifs = this.props.gifs.map((gif) => {return <img className="gif" key={gif.id} alt={gif.slug} src={gif.images.original.url} />})
    console.log(gifs)
    return (
      <div>
        {gifs}
      </div>
    )
  }
}

export default GifList
