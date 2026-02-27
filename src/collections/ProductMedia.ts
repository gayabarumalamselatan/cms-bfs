import { CollectionConfig } from 'payload'
import { isEditor } from 'tests/helpers/rolechecker'

export const ProductMedia: CollectionConfig = {
  slug: 'product-media',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  upload: {
    staticDir: 'media/products',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
