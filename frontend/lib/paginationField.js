import { PAGINATION_QUERY } from '../components/Pagination/query'

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, take } = args

      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY })
      const count = data?.productsCount
      const page = skip / take + 1
      const pages = Math.ceil(count / take)

      // Check if we have existing items
      const items = existing.slice(skip, skip + take).filter((x) => x)

      if (items.length && items.length !== take && page === pages) {
        return items
      }
      if (items.length !== take) {
        // We don't have any items, we must go to the network to fetch them
        return false
      }

      // If there are items, just return them from the cache, ad we don't need to go to the network
      if (items.length) {
        return items
      }

      return false // fallback to network

      // take thing it does it asks the read functino for those items.
      // we can either do of of two things:
      // take thing we can do is return the items because they are already in the cache
      // the other thingw e can do is return false from here, (network request)
    },
    merge(existing, incoming, { args }) {
      // This runs when the Apollo clients comes back from the network with our product
      const { skip, take } = args
      const merged = existing ? existing.slice(0) : []
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip]
      }

      // Finally we return the merged items from the cache,
      return merged
    },
  }
}
