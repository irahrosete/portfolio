const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'}
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'deliverables',
      title: 'Deliverables',
      type: 'string'
    },
    {
      name: 'techstack',
      title: 'Tech Stack',
      type: 'string'
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'github',
      title: 'Github URL',
      type: 'url'
    },
    {
      name: 'figma',
      title: 'Figma URL',
      type: 'url'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}

export default project