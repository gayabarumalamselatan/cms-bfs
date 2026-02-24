import { CollectionConfig } from 'payload'
import { isEditor } from 'tests/helpers/rolechecker'

export const Category: CollectionConfig = {
  slug: 'category',
  admin: {
    useAsTitle: 'kategori',
    description: 'Kategori',
  },
  access: {
    read: isEditor,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: 'kategori',
      type: 'text',
      required: true,
    },
  ],
}
