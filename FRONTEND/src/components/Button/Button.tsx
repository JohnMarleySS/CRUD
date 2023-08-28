type Button = { 
    name: string,
}

const ButtonActive = ({ name, ...rest }: Button) => {
    return(
        <button {...rest}>{name} </button>
    )
}

export default ButtonActive