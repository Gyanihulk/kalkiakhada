/**
 * This is an example of ui component using both default component and styled component
 * TODO: replace this with actual select
 */

import styled from 'styled-components'

const noop = () => {}

export const Select = ({
  className = '',
  options = [],
  value = null,
  onChange = noop,
  children = null,
}) => {
  return (
    <select className={className} onChange={onChange}>
      {children ||
        options.map((option) => (
          <option value={option} selected={option === value}>
            {option}
          </option>
        ))}
    </select>
  )
}

export const SelectStyled = styled(Select)``

export default SelectStyled
