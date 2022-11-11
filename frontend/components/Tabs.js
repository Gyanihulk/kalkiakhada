import styled from 'styled-components'

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -2px;
  margin-top: -2px;
`

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 32px;
  font-weight: 500;
  color: var(--cb--gray-01);
  cursor: pointer;
  font-size: 14px;
  transition: background 0.25s ease-in-out;
  &:hover {
    background-color: var(--color-bg-primary);
  }

  ${({ isActive }) =>
    isActive &&
    `
      color: var(--cb--dark-01);
      border-bottom: 2px solid var(--cb--red-01);
    `}
`
