import type { CollectionConfig } from 'payload'
import { isAdmin } from 'tests/helpers/rolechecker'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'media/admin',
    mimeTypes: ['image/*'],
  },
}
