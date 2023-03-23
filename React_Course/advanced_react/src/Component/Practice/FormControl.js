import { Input, Gender, Car, Book } from "./Forms"


const FormControl = (props) => {
    const { control, ...rest } = props

    switch (control) {
        case "input":
            return <Input {...rest} />
        case "gender":
            return <Gender {...rest} />
        case "car":
            return <Car {...rest} />
        case "book":
            return <Book {...rest} />
        default:
            return null;
    }
}

export default FormControl;