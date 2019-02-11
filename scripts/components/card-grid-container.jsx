import React from 'react';
import api from '../api';
import CardGrid from './card-grid';

class CardGridContainer extends React.Component {
  state = {
    photos: []
  };

  componentDidMount() {
    api.getPhotos(photos => this.setState({ photos }));
  }

  render() {
    const { photos } = this.state;
    return <CardGrid photos={photos} />;
  }
}

export default CardGridContainer;
