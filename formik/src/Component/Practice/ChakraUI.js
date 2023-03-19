import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'

function ChakraUI(props) {
    const { name, label, ...rest } = props
    return (
        <div className='form_control'>
            <Field name={name} >
                {
                    props => {
                        const { field, form } = props

                        return (
                            <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                                <FormLabel htmlFor={name}>{label}</FormLabel>
                                <Input id={name} {...rest} {...field} />
                                <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                            </FormControl>
                        )
                    }
                }
            </Field>
        </div>
    )
}

export default ChakraUI