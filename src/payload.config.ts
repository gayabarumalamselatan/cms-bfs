import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { AboutUs } from './collections/AboutUs'
import { Category } from './collections/Category'
import { SubCategory } from './collections/SubCategory'
import { ContactUs } from './collections/ContactUs'
import { Products } from './collections/Product'
import { ProductMedia } from './collections/ProductMedia'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' | CMS BFS',
      description: 'Content Management System',
      icons: {
        icon: '@components/Logo',
      },
    },
    components: {
      graphics: {
        Logo: '@/components/LoginLogo',
        Icon: '@/components/Logo',
      },
    },
  },
  collections: [Users, Media, AboutUs, Category, SubCategory, ContactUs, Products, ProductMedia],
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://192.168.19.236:3000',
    'http://192.168.19.236:3001',
    // Tambahkan juga tanpa port
    'http://192.168.19.236',
    // Jika pakai https
    // 'https://192.168.19.236:3001',
  ],
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://192.168.19.236:3000',
    'http://192.168.19.236:3001',
    'http://192.168.19.236',
  ],
  upload: {
    limits: {
      fileSize: 10_000_000,
    },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
