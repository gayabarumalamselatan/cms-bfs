import type { CollectionConfig } from 'payload'
import { isAdmin, isEditor, isHiddenFromAdmin } from 'tests/helpers/rolechecker'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    hidden: isHiddenFromAdmin,
  },
  access: {
    read: ({ req }) => {
      if (!req.user) return false

      if (req.user.role === 'admin') return true

      return {
        id: {
          equals: req.user.id,
        },
      }
    },
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
    },
  ],
}
