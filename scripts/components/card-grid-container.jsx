import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPhotos, fetchNextPage, changePhotosOrder } from '../actions';
import CardGrid from './card-grid';

const CardGridContainer = ({ photos, fetchPhotos, fetchNextPage, changePhotosOrder, ...props }) => {
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <CardGrid
      photos={photos}
      {...props}
      onOrderChange={() => changePhotosOrder()}
      onNextPage={() => fetchNextPage()}
    />
  );
};

const mapStateToProps = state => state.photos;

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPhotos, fetchNextPage, changePhotosOrder }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardGridContainer);
