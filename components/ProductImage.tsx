import Link from "next/link";
import Image from "next/image";

function ProductImage({ slug, imageSource }) {
  // console.log
  return (
    <Link href={`/product/${slug}`}>
      <Image src={imageSource} layout="fill" objectFit="contain" />
    </Link>
  );
}

export default ProductImage;
