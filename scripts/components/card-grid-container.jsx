import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos, fetchNextPage, setPhotosOrder } from '../actions';
import CardGrid from './card-grid';

const CardGridContainer = ({ photos, fetchPhotos, fetchNextPage, setPhotosOrder, ...props }) => {
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <CardGrid
      photos={photos}
      {...props}
      onOrderChange={order => setPhotosOrder(order)}
      onNextPage={() => fetchNextPage()}
    />
  );
};

const mapStateToProps = state => state.photos;

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPhotos, fetchNextPage, setPhotosOrder }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardGridContainer);
