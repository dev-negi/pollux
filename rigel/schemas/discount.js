export default {
  name: 'discount',
  title: 'Discount',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'number',
    },
    {
      name: 'startdate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'enddate',
      title: 'End Date',
      type: 'date',
    },
  ],
}
