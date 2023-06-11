import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schema'

const config = defineConfig({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECTID}`,
  dataset: 'production',
  title: 'Portfolio Website 2.0',
  apiVersion: '2023-06-11',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {types: schemas}
})

export default config