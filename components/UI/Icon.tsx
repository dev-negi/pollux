const Icon = (props) => {
    const {src, ...other} = props;

    retrun <span {...other} src={src} />
}

export default Icon;