import { useId } from 'react'
import styled from 'styled-components'

function CheckBox({
  name,
  label = '',
  checked,
  onChange,
  value,
  children = null,
  ...props
}) {
  const id = useId()

  return (
    <Wrapper>
      <CheckboxWrapper>
        <StyledCheck
          id={id}
          onChange={onChange}
          name={name}
          checked={checked}
          type="checkbox"
          value={value}
          {...props}
        />
      </CheckboxWrapper>
      <Label htmlFor={id}>{children || label}</Label>
    </Wrapper>
  )
}

export default CheckBox

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`

const CheckboxWrapper = styled.div`
  width: 16px;
  height: 16px;
`

const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 0 0 0 14px;
  cursor: pointer;
  margin-top: -0.2em;
`

const StyledCheck = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid var(--cb--dark-03);
  border-radius: 4px;
  accent-color: red;
  appearance: none;
  padding: 0;
  outline: 2px solid transparent;
  cursor: pointer;
  display: block;

  &:focus {
    border-radius: 4px;
    box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px pink;

    &[aria-invalid='true'] {
      border: 1px solid red;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px red;
    }
  }

  &:checked {
    background-color: green;
  }

  &:invalid,
  &[aria-invalid='true'] {
    background: orange;
    &:focus {
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px orange;
    }
  }

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
`
