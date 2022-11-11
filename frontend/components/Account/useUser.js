import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        firstName
        lastName
      }
    }
  }
`

export function useUser() {
  const { data, loading } = useQuery(CURRENT_USER_QUERY)
  return { data: data?.authenticatedItem, loading }
}

export default useUser
