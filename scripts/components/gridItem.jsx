import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { BREAKPOINT_FABLET, BREAKPOINT_MOBILE, DEFAULT_TRANSITION } from '../common/styles/common';
import { FLEX_BASIS_DESKTOP, FLEX_BASIS_FABLET, FLEX_BASIS_MOBILE } from '../common/styles/grid';

const StyledGridItem = styled('section')`
  flex: 1;
  flex-basis: ${FLEX_BASIS_DESKTOP};

  background: #fbfbfb;
  margin: 10px;

  border-radius: 5px;
  box-shadow: 0px 1px 3px 1px #e8e8e8;
  overflow: hidden;
  transition: ${DEFAULT_TRANSITION};

  &:hover {
    box-shadow: -1px 4px 9px 1px #e8e8e8;
    transform: translateY(-5px);
    transition: ${DEFAULT_TRANSITION};
  }

  @media (max-width: ${BREAKPOINT_FABLET}) {
    flex-basis: ${FLEX_BASIS_FABLET};
  }
  @media (max-width: ${BREAKPOINT_MOBILE}) {
    flex-basis: ${FLEX_BASIS_MOBILE};
  }
`;

const StyledLink = styled('a')`
  text-decoration: none;
  color: inherit;
`;

const StyledPlaceholder = styled('div')`
  background: #f7f7f7;
  height: 140px;
  overflow: hidden;
`;

const StyledImg = styled('img')`
  width: 100%;
`;

const StyledTitle = styled('h3')`
  padding: 10px;
  margin: 8px 0;
  font-weight: 400;
  color: rgba(53, 53, 53, 0.85);

  letter-spacing: 0.01em;
  line-height: 1.3em;
`;

const GridItem = props => (
  <StyledGridItem>
    <StyledLink target="__BLANK" href={props.data.url} rel="noreferrer">
      <StyledPlaceholder>
        <StyledImg alt={props.data.title} src={props.data.thumbnailUrl} />
      </StyledPlaceholder>
      <StyledTitle>{props.data.title}</StyledTitle>
    </StyledLink>
  </StyledGridItem>
);

GridItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  }).isRequired
};

export default GridItem;
