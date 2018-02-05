import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPhotos, sortPhotos, changePage } from '../modules/photos';

import Logo from '../common/styles/logo';
import Grid from './grid';

class App extends React.Component {
  componentWillMount() {
    this.props.getPhotos();
  }
  render() {
    return (
      <main>
        <Logo />
        <Grid
          data={this.props.photos}
          onPagination={this.props.changePage}
          onSort={this.props.sortPhotos}
        />
      </main>
    );
  }
}

App.propTypes = {
  getPhotos: PropTypes.func.isRequired,
  sortPhotos: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  photos: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    limit: PropTypes.number,
    page: PropTypes.number,
    sort: PropTypes.string,
    order: PropTypes.string,
    items: PropTypes.array
  }).isRequired
};

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPhotos, sortPhotos, changePage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
