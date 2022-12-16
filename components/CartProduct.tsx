import Image from "next/image";
import { useDispatch } from "react-redux";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { removeFromBasket } from "../redux/basketSlice";
import { urlForThubnail } from "../utils";
interface Props {
  items: Product[];
  id: string;
}

function CartProduct({ id, items }: Props) {
  console.log("cart product:-", items);
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  const totalCartValue = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
        <Image
          src={urlForThubnail(items[0].image[0]).url()}
          alt={items[0].title}
          width={300}
          height={300}
          layout="responsive"
        ></Image>
      </div>
      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
              <ChevronDownIcon className="h-6 w-6 text-blue-500" />
            </p>
          </div>
          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            <div>
              {totalCartValue}
              USD
            </div>
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
