import { CollectionConfig } from 'payload'
import { isEditor } from 'tests/helpers/rolechecker'

export const Products: CollectionConfig = {
  slug: 'product',
  admin: {
    useAsTitle: 'nama',
    description: 'Produk',
  },
  access: {
    read: isEditor,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: 'nama',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'product-media',
      required: true,
    },
    {
      name: 'kategori',
      type: 'relationship',
      relationTo: 'category',
      required: true,
    },
    {
      name: 'sub kategori',
      type: 'relationship',
      relationTo: 'sub-category',
      required: true,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData.kategori),
      },
    },
  ],
}
