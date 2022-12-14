import ProductItem from "./ProductItem";

function ProductContainer({ products }) {
  return (
    <>
      <div className="product-main-container">
        <div className="product-list-container">
          {products.map((product) => (
            <ProductItem product={product} key={product.slug.current} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
