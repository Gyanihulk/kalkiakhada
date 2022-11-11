import { gql, useQuery } from '@apollo/client'

export const GET_STREAM_TOKEN = gql`
  query {
    userStreamToken {
      token
    }
  }
`

export function useUserStreamToken() {
  const { data, loading } = useQuery(GET_STREAM_TOKEN)
  return { data: data?.userStreamToken?.token, loading }
}

export default useUserStreamToken
