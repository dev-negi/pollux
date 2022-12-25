import Link from 'next/link'
export function getProductTableColumn(products) {
  //TODO Should not be based out of first entry
  const columns = buildColumns(products[0])
  return columns
}

const startCase = (value) => {
  return value
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim()
}

const showColumnNames = ['_id', 'name', 'slug', 'status', 'vendor', 'inventory']
function buildColumns(obj) {
  const slug = obj.slug?.current

  const resultColumn = []
  for (const key in obj) {
    if (showColumnNames.indexOf(key) !== -1) {
      let header = {
        Header: startCase(key),
        accessor: key,
      }
      if (key === '_id') {
        header.Header = '#'
        header.Cell = ({ row }) => {
          return parseInt(row.id) + 1
        }
      }

      // if (key === 'name') {
      //   header.Cell = (rows) => <a href="ur"> project details</a>
      // }
      resultColumn.push(header)
    }
  }

  console.log('resultColumn:-', resultColumn)
  return resultColumn
}

function filterData(products) {
  // for ()
}
