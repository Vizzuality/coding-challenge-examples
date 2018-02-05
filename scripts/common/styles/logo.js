import styled from 'react-emotion';

import { LOGO_PATH } from '../styles/common';

const Logo = styled('div')`
  height: 50px;
  width: 210px;
  margin: 20px auto;

  background-image: url(${LOGO_PATH});
  background-repeat: no-repeat;
  background-size: contain;
`;

export default Logo;
