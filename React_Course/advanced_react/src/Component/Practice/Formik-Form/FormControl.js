import "./style.css"
import { Input, Gender, RoleFunctions, Assest, DateForm } from "./Input"


const FormControl = (props) => {
    const { control, ...rest } = props;
    switch (control) {
        case "input":
            return <Input {...rest} />
        case "selectGender":
            return <Gender {...rest} />
        case "selectRoles":
            return <RoleFunctions {...rest} />
        case "date":
            return <DateForm {...rest} />
        case "checkbox":
            return <Assest {...rest} />
        default:
            return null;
    }
}

export default FormControl;