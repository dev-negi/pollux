import Link from 'next/link'
export function getProductTableColumn(products) {
  //TODO Should not be based out of first entry
  const columns = buildColumns(products[0])

  return columns
}

export function getProdcutTableData(products) {
  const data = []
  products.forEach((product) => {
    const { _id, name, inventory, price, slug, status, title, vendor } = product
    data.push({
      _id,
      name,
      inventory,
      price,
      slug,
      status,
      title,
      vendor: vendor?.name,
    })
  })
  return data
}

const startCase = (value) => {
  return value
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim()
}

const showColumnNames = ['_id', 'name', 'slug', 'status', 'inventory', 'vendor']
function buildColumns() {
  const resultColumn = []
  showColumnNames.forEach((col) => {
    let header = {
      Header: startCase(col),
      accessor: col,
    }

    if (col === '_id') {
      header.Header = '#'
      header.Cell = ({ row }) => {
        return parseInt(row.id) + 1
      }
    }

    resultColumn.push(header)
  })

  return resultColumn
}

function filterData(products) {
  // for ()
}
