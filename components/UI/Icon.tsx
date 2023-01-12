const Icon = (props) => {
  const { src, ...other } = props

  retrun(<span src={src} {...other} />)
}

export default Icon
