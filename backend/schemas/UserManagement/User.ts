import { list } from '@keystone-6/core'
import { text, password, relationship, json, select } from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
import { permissions, rules } from '../../access'

export const User = list({
  access: {
    operation: {
      create: () => true,
      // only people with the permission can delete themselves!
      // You can't delete yourself
      delete: permissions.canManageUsers,
    },
    filter: {
      query: rules.canManageUsers,
      update: rules.canManageUsers,
    },
  },
  ui: {
    // hide the backend UI from regular users
    hideCreate: (args) => !permissions.canManageUsers(args),
    hideDelete: (args) => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    about: document(),
    avatar: relationship({ ref: 'Asset' }),
    contactNumber:text({ validation: { isRequired: true } }),
    userType:select({
      type: 'enum',
      options: [
        { label: 'Trainer', value: 'trainer' },
        { label: 'Gym Owner', value: 'gymOwner' },
        { label: 'Trainee', value: 'trainee' },
      ],
    }),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
        update: permissions.canManageUsers,
      },
    }),   
    asset: relationship({ ref: 'Asset.author' }),
  },
})
