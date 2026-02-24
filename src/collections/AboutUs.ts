import { CollectionConfig } from 'payload'
import { isEditor } from 'tests/helpers/rolechecker'

export const AboutUs: CollectionConfig = {
  slug: 'about-us',
  admin: {
    useAsTitle: 'judul',
    description: 'Konten section Tentang Kami',
  },

  access: {
    read: isEditor,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: 'judul',
      type: 'text',
      required: true,
    },
    {
      name: 'konten',
      type: 'textarea',
      required: true,
    },
  ],
}
