import NextLink from "next/link";
import { urlForThubnail } from "../utils";

function ProductItem({ product }) {
  return (
    <div>
      <NextLink href={`/product/${product.slug.current}`} passHref>
        <div className="action-area">
          <div className="hero-image">product image</div>
          <div className="product-name">{product.title}</div>
          <div className="product-price">{product.price}</div>
        </div>
      </NextLink>
    </div>
  );
}

export default ProductItem;
