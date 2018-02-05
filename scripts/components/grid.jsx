import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Filter from './filter';
import GridItem from './gridItem';
import Pagination from './pagination';

import { SITE_WIDTH } from '../common/styles/common';

const StyledGrid = styled('div')`
  display: flex;
  flex-flow: wrap;

  max-width: ${SITE_WIDTH};
  margin: 0 auto;
`;

const StyledLoader = styled('p')`
  text-align: center;
  width: 100%;
  font-size: 26px;
`;

const Grid = props => (
  <StyledGrid>
    <Filter data={props.data} onSort={props.onSort} />

    {props.data.loading ? <StyledLoader>Loading...</StyledLoader> : null}

    {props.data.items && props.data.items.length
      ? props.data.items.map(d => <GridItem key={d.id} data={d} />)
      : null}

    {props.data.page !== props.data.pages ? (
      <Pagination data={props.data} whenClick={props.onPagination} />
    ) : null}
  </StyledGrid>
);

Grid.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array,
    page: PropTypes.number,
    pages: PropTypes.number
  }).isRequired,
  onPagination: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired
};

export default Grid;
