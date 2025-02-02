import React from 'react'
import styled from 'styled-components'

import { ICON_OFFSET } from 'v2/components/UI/SearchInput'
import Icons from 'v2/components/UI/Icons'

const Container = styled.a`
  box-sizing: border-box;
  display: block;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: ${ICON_OFFSET};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props => props.theme.colors.gray.base};
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colors.gray.bold};
    }
  }
`

export default props => (
  <Container href="/" {...props} aria-label="Go to home">
    <Icons name="ArenaMark" width="100%" />
  </Container>
)
