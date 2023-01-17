import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'amazonbackend',

  projectId: 'wpq512kq',
  dataset: 'production',
  basePath : '/studio' ,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
