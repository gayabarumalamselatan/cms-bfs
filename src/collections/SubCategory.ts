import { CollectionConfig } from 'payload'
import { isEditor } from 'tests/helpers/rolechecker'

export const SubCategory: CollectionConfig = {
  slug: 'sub-category',
  admin: {
    useAsTitle: 'sub kategori',
  },
  access: {
    read: isEditor,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: 'sub kategori',
      type: 'text',
      required: true,
    },
    {
      name: 'kategori',
      type: 'relationship',
      relationTo: 'category',
      required: true,
    },
  ],
}
