import { CollectionConfig } from 'payload'
import { isEditor } from 'tests/helpers/rolechecker'

export const FeaturedProducts: CollectionConfig = {
  slug: 'featured-products',
  admin: {
    useAsTitle: 'featuredProducts',
  },
  access: {
    read: isEditor,
    create: () => false,
    update: isEditor,
    delete: () => false,
  },
  fields: [
    {
      name: 'featuredProducts',
      label: 'Featured Products',
      type: 'relationship',
      hasMany: true,
      relationTo: 'product',
      required: true,
    },
  ],
}
