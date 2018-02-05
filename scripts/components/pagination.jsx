import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { SITE_WIDTH } from '../common/styles/common';

const StyledPagination = styled('section')`
  position: relative;
  max-width: ${SITE_WIDTH};

  margin: 20px auto 60px auto;
  z-index: 20;
  width: 100%;
  text-align: center;
`;

const StyledButton = styled('button')`
  border: none;
  padding: 6px 10px;
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  outline: none;

  border-bottom: 2px solid ${props => (props.active ? '#2b1c09;' : 'transparent')};
`;

const MAX_PAGINATION_ITEMS = 5;

function activePage(page, index) {
  return page + index === page;
}

const Pagination = props => (
  <StyledPagination>
    {props.data.page !== 1 ? (
      <StyledButton onClick={() => props.whenClick(props.data.page - 1)}>&#9668;</StyledButton>
    ) : null}

    {[...Array(MAX_PAGINATION_ITEMS)].map((n, i) => (
      <StyledButton
        onClick={() =>
          activePage(props.data.page, i) ? null : props.whenClick(props.data.page + i)
        }
        active={activePage(props.data.page, i)}
        // eslint-disable-next-line react/no-array-index-key
        key={props.data.page + i}
      >
        {props.data.page + i}
      </StyledButton>
    ))}

    {props.data.page !== props.data.pages ? (
      <StyledButton onClick={() => props.whenClick(props.data.page + 1)}>&#9658;</StyledButton>
    ) : null}
  </StyledPagination>
);

Pagination.propTypes = {
  data: PropTypes.shape({
    pages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired
  }).isRequired,
  whenClick: PropTypes.func.isRequired
};

export default Pagination;
