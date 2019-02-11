import React from 'react';

class CardGrid extends React.Component {
  state = {
    sort: true
  };

  handleSortClick = () => this.setState({ sort: !this.state.sort });

  render() {
    const { sort } = this.state;
    const { photos } = this.props;
    photos.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return titleA <= titleB && sort ? 1 : -1;
    });
    return (
      <React.Fragment>
        <button type="button" onClick={this.handleSortClick}>
          Title
        </button>
        <ul>
          {photos.map(photo => (
            <li key={photo.id}>
              <h3>{photo.title}</h3>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default CardGrid;
