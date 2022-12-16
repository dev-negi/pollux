This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div x-data="image-1">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                <Image
                  src={urlForThubnail(product.image[0]).url()}
                  alt={product.title}
                  width={640}
                  height={640}
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="flex-1 px-2">
                <div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                  1
                </div>
              </div>
              <div className="flex-1 px-2">
                <div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                  2
                </div>
              </div>
              <div className="flex-1 px-2">
                <div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                  3
                </div>
              </div>
              <div className="flex-1 px-2">
                <div className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ring-2 ring-indigo-300 ring-inset">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h1 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {product.title}
          </h1>
          <p className="text-gray-500 text-sm">
            <a className="text-indigo-600 hover:underline">ABC company</a>
          </p>
          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="text-indigo-400 mr-1 mt-1">$</span>
                <span className="font-bold text-indigo-600 text-3xl">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
            exercitationem porro saepe ea harum corrupti vero id laudantium
            enim, libero blanditiis expedita cupiditate a est.
          </p>
          <div className="flex py-4 space-x-4">
            <Button
              title="Add To Cart"
              width="w-50"
              height="h-10"
              color="bg-indigo-600"
              hoverColor="bg-indigo-500"
              onClick={}
            />
          </div>
        </div>
      </div>
    </div>
