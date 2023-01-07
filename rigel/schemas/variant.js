export default {
  name: 'variant',
  title: 'Variant',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'costperitem',
      title: 'Cost Per Item',
      type: 'number',
    },
    {
      name: 'compareprice',
      title: 'compare price',
      type: 'number',
    },
    {
      name: 'quantity',
      title: 'Quntity',
      type: 'number',
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
    },
    {
      name: 'barcode',
      title: 'barcode',
      type: 'string',
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'array',
          name: 'varaint',
          title: 'variant name',
          type: 'document',
          fields: [
            {
              name: 'key',
              title: 'Key',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
