import { graphQLSchemaExtension } from '@keystone-6/core'

// make a fake graphql tagged template literal
const graphql = String.raw
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
   type AmityTokenResult {
      token: String
      user: String
    }
    type Query {
      userAmityToken: AmityTokenResult
    }
  `,
  resolvers: {
    Mutation: {},
    Query: {},
  },
})
