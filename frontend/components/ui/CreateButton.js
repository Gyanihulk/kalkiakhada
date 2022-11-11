import styled, { css } from 'styled-components'
import SvgPlus from '../Icons/tabBar/Plus'

const createButtonMixin = () => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--cb-red-gradient);
  text-decoration: none;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  border-style: none;
  outline: none;
  color: white;
  padding: 0;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    &:after {
      display: block;
      content: '';
      background: var(--cb-red-gradient-transparent);
      border-radius: 50%;
      position: absolute;
      inset: -7px;
      z-index: -1;
    }
  }

  &:disabled {
    opacity: 0.5;
  }
`

// export const StyledCreateAnchor = styled.a`
//   ${createButtonMixin}
// `

export const StyledCreateButton = styled.button`
  ${createButtonMixin}
  ${({ open }) =>
    open &&
    `
      transform: rotate(45deg);
  `}
`

const CreateButton = (props) => {
  return (
    <StyledCreateButton {...props}>
      <SvgPlus />
    </StyledCreateButton>
  )
}

export default CreateButton
