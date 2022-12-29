import Image from './Image.type'

export default interface HomeHeroImages {
  _id: string
  title: string
  name: string
  primarytext: string
  secondarytext: string
  tertiartext: string
  type: string
  button: string
  image: Image[]
}
