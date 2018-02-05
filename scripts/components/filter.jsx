import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledFilter = styled('section')`
  position: relative;
  display: flex;
  width: 100%;

  margin: 10px auto;

  flex-direction: row;
  justify-content: flex-end;
  z-index: 20;
`;

const StyledLabel = styled('label')`
  line-height: 1;
`;

const StyledOptions = styled('select')`
  margin: 0 0 0 10px;
`;

const StyledOption = styled('option')`
  display: block;
  width: 100%;
`;

const Filter = props => (
  <StyledFilter>
    <StyledLabel for="filter">
      Order photos:
      <StyledOptions id="filter" value={props.data.order} onChange={props.onSort}>
        <StyledOption value="asc">Ascending</StyledOption>
        <StyledOption value="desc">Descending</StyledOption>
      </StyledOptions>
    </StyledLabel>
  </StyledFilter>
);

Filter.propTypes = {
  data: PropTypes.shape({
    order: PropTypes.string.isRequired
  }).isRequired,
  onSort: PropTypes.func.isRequired
};

export default Filter;
