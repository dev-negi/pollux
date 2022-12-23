import HomeHeroImages from '../../types/homeHeroImages.type'

export const fetchHomeHeroImages = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/homeHeroImages`
  )
  const data = await res.json()
  const homeHeroImageList: HomeHeroImages[] = data.homeHeroImageList
  // console.log(' homeHeroImages:-', data)
  return homeHeroImageList
}
