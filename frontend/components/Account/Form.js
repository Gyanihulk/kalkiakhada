import styled from 'styled-components'
import Checkbox from 'components/ui/Checkbox'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  width: 75%;
  max-width: 570px;
  margin: 0 auto;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: ${({ column = false }) => (column ? 'column' : 'row')};
  ${({ center = false }) => (center ? `justify-content: center;` : '')}
  align-items: center;
`
