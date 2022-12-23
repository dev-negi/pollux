export default {
  name: 'appimages',
  title: 'App Images',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'primarytext',
      title: 'Primary Text',
      type: 'string',
    },
    {
      name: 'secondarytext',
      title: 'Secondary Text',
      type: 'string',
    },
    {
      name: 'tertiartext',
      title: 'Tertiar Text',
      type: 'string',
    },
    {
      name: 'button',
      title: 'buttontext',
      type: 'string',
    },
    {
      name: 'type',
      title: 'type',
      type: 'string',
    },
  ],
}
