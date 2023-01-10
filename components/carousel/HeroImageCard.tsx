import React from 'react'

import { urlForThubnail } from '../../utils'

function HeroImageCard(props) {
  const { name, primarytext, secondarytext, tertiartext, button, _id, image } =
    props.data
  //   const imageClass = index === imageRef.current ? "block" : "hidden h-auto";
  return (
    <div className="block" key={_id}>
      <img
        src={urlForThubnail(image[0]).url()}
        className="w-screen transform transition scale-125 duration-500"
      />
      <div className="absolute top-1/4 p-20 text-white">
        <div className="uppercase text-xl mb-2">{name}</div>
        <div className="uppercase text-5xl font-extrabold">{primarytext}</div>
        <div className="uppercase text-8xl font-extrabold mb-4">
          {secondarytext}
        </div>
        <div className="mb-10">{tertiartext}</div>
        <button className="pl-5 pr-5 pb-3 pt-3 bg-white text-black text-xs font-bold uppercase trasition duration-500 ease-in hover:bg-black hover:text-white">
          {button}
        </button>
      </div>
    </div>
  )
}

export default HeroImageCard
