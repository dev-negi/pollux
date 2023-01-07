import React from 'react'

import VariantTags from './VariantTags'
import { groupBy } from '../../utils'

function VariantOption({ variantList }) {
  return Object.keys(variantList).map((key) => (
    <div key={key} className="block">
      <h3 className="m-2 font-bold">{key}</h3>
      {variantList[key] ? <VariantTags data={variantList[key]} /> : null}
    </div>
  ))
}
export default VariantOption
