import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { XCircleIcon } from '@heroicons/react/outline'

import Layout from '../components/Layout'
import CartProduct from '../components/CartProduct'
import Button from '../rango/Button'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice'

function Cart() {
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const router = useRouter()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  )

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      ;(results[item._id] = results[item._id] || []).push(item)
      return results
    }, {} as { [key: string]: Product[] })

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  return (
    <Layout title="Shopping Cart">
      <div className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? 'Review your bag.' : 'Your bag is empty.'}
          </h1>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              width="w-50"
              height="h-10"
              color="bg-indigo-600"
              hoverColor="bg-indigo-500"
              onClick={() => router.push('/')}
            />
          )}
        </div>
        {items.length >= 0 && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CartProduct key={key} items={items} id={key} />
            ))}
            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{basketTotal}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Cart
