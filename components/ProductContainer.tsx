import ProductItem from './ProductItem'
import HeroImageCarousel from './carousel/HeroImageCarousel'

function ProductContainer({ products }) {
  return (
    <>
      <HeroImageCarousel />
      <div className="product-main-container">
        <div className="product-list-container">
          {products.map((product) => (
            <ProductItem product={product} key={product.slug.current} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductContainer
