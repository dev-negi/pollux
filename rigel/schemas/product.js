export default {
  name: 'product',
  title: 'Product',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },

    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
    },
    {
      name: 'hscode',
      title: 'Harmonized System Code',
      type: 'string',
    },
    {
      name: 'tax',
      title: 'tax',
      type: 'number',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'string',
    },
    {
      name: 'isdiscount',
      title: 'Is Discount',
      type: 'boolean',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'discount'},
        },
      ],
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: {
        type: 'vendor',
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'variant'},
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
