import { useState } from 'react'
import styled from 'styled-components'

const StyledInputWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: left;
  min-height: 50px;
  width: 100%;
`

const StyledInputLabel = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  bottom: 0;
  padding: 0 18px 0 14px;
  display: flex;
  align-items: center;
  z-index: 22;
  pointer-events: none;
  color: var(--cb--gray-00);
`

const StyledInput = styled.input`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  min-height: 50px;
  width: 100%;
  padding: 18px 6px 4px 17px;
  position: relative;
  z-index: 20;
  color: var(--cb--dark-01);

  :focus {
    outline: 2px solid var(--cb--dark-01);
  }
`

const StyledAnimatedLabel = styled.div`
  width: 100%;

  ${({ floatLabel = false }) => {
    if (floatLabel) {
      return 'transform: translateY(-12px) translateX(-16.5%) scale(0.65);'
    }

    return 'transform: translateY(0) scale(1);'
  }}
`

const Input = styled(
  ({
    label,
    placeholder,
    onChange = () => {},
    value = '',
    className = '',
    holderProps = {},
    ...props
  }) => {
    const [floatLabel, setFloatLabel] = useState(value ? true : false)

    const handleFocus = (e) => {
      setFloatLabel(true)
    }

    const handleBlur = (e) => {
      if (value === '') {
        setFloatLabel(false)
      }
    }

    return (
      <StyledInputWrapper className={className} {...holderProps}>
        <StyledInputLabel>
          <StyledAnimatedLabel floatLabel={floatLabel}>
            {label || placeholder}
          </StyledAnimatedLabel>
        </StyledInputLabel>

        <StyledInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          value={value}
          {...props}
        />
      </StyledInputWrapper>
    )
  },
)``

export default Input
