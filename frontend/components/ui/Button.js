import { oneOf } from 'prop-types'
import styled, { css } from 'styled-components'

const variants = {
  oldprimary: {
    color: 'var(--color-text-primary)',
    hoverColor: 'var(--color-text-primary)',
    background: 'var(--color-bg-primary)',
    hoverBackground: 'var(--color-text-secondary)',
    border: 'var(--color-bg-primary)',
    hoverBorder: 'var(--color-bg-primary)',
    focusShadow: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px var(--color-bg-primary)',
  },
  primary: {
    color: 'var(--color-button-primary-text)',
    hoverColor: 'var(--color-button-primary-text-hover)',
    background: 'var(--color-button-primary-bg)',
    hoverBackground: 'var(--color-button-primary-bg-hover)',
    border: 'var(--ccolor-button-primary-border)',
    hoverBorder: 'var(--color-button-primary-border-hover)',
    focusShadow:
      '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px var(--color-button-primary-bg)',
  },
}

const sizes = {
  small: {
    fontSize: '12px',
    height: '32px',
    padding: '0 1rem',
  },
  medium: {
    height: '40px',
    fontSize: '14px',
    padding: '0 1rem',
  },
  large: {
    height: '48px',
    fontSize: '16px',
    padding: '0 1.5rem',
  },
}

const buttonMixin = ({ variant, size }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${variants[variant].background};
  color: ${variants[variant].color};
  text-decoration: none;
  font-weight: 600;
  font-size: ${sizes[size].fontSize};
  line-height: 16px;
  padding: ${sizes[size].padding};
  height: ${sizes[size].height};
  border-radius: 4px;
  border: 2px solid ${variants[variant].border};

  span {
    display: contents;
  }

  &:hover {
    color: ${variants[variant].hoverColor};
    background: ${variants[variant].hoverBackground};
    border: 2px solid ${variants[variant].hoverBorder};
    cursor: pointer;
  }

  &:focus {
    box-shadow: ${variants[variant].focusShadow};
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const StyledAnchor = styled.a.attrs((props) => ({
  variant: props?.variant || 'primary',
  size: props?.size || 'medium',
}))`
  ${buttonMixin}
`

export const StyledButton = styled.button.attrs((props) => ({
  variant: props?.variant || 'primary',
  size: props?.size || 'medium',
}))`
  ${buttonMixin}
`

const propTypes = {
  variant: oneOf(['primary', 'secondary', 'tertiary']),
  size: oneOf(['small', 'medium', 'large']),
}

const defaultProps = {
  size: 'medium',
  variant: 'primary',
}

StyledAnchor.propTypes = propTypes
StyledAnchor.defaultProps = defaultProps

StyledButton.propTypes = propTypes

StyledButton.defaultProps = defaultProps

export default StyledButton
