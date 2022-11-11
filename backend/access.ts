import { Permission, permissionsList } from './schemas/fields'
import { ListAccessArgs } from './types'

// At it's simplest, the access control returns a yes or no value depending on the users session

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session
}

const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission]
    },
  ]),
) as Record<Permission, ({ session }: ListAccessArgs) => boolean>

// Permissions check if someone meets a criteria - yes or no.
export const permissions = {
  ...generatedPermissions,
  // isAwesome({ session }: ListAccessArgs): boolean {
  //   return !!session?.data.name.includes("wes");
  // },
}

// Rule based function
// Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD.
export const rules = {
  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageUsers({ session })) {
      return true
    }
    // Otherwise they may only update themselves!
    return { id: { equals: session?.itemId } }
  },
  canManageListing({ session }: ListAccessArgs) {
    // console.log(session)
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageListing({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageAnimal({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageAnimal({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageArticle({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageArticle({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageEvent({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageEvent({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageTrait({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageTrait({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManagePage({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManagePage({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageStore({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageStore({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageAsset({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageAsset({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageGroup({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageGroup({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManagePost({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManagePost({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageGlobal({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageGlobal({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageSetting({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageSetting({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageSubscription({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageSubscription({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageCollection({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageCollection({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
  canManageOrganization({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }
    if (permissions.canManageOrganization({ session })) {
      return true
    }
    return { author: { id: { equals: session?.itemId } } }
  },
}
