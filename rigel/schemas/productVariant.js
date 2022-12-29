export default {
  name: 'productVariant',
  title: 'Product Variant',
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
      name: 'comparePrice',
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
      type: 'number',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
