import { CollectionConfig } from 'payload'
import { isEditor } from 'tests/helpers/rolechecker'

export const ContactUs: CollectionConfig = {
  slug: 'contact-us',
  admin: {
    useAsTitle: 'judul',
    description: 'Konfigurasi Hubungi Kami',
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
