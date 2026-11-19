import type { FC } from "react"
import type { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface ICustomInputProps {
    register: UseFormRegisterReturn,
    errors: FieldError | undefined,
    label: string,
    type: string,
    placeholder: string
}

const CustomInput: FC<ICustomInputProps> = ({register, errors, label, type, placeholder}) => {
    
    return (
        <div className="enter__item">
            <label>
                <span className="enter__text">{label}</span>
                <input
                    {...register}
                    type={type}
                    className="enter__input"
                    placeholder={placeholder}
                />
            </label>
            <p className="enter__error">
                {errors && errors.message}
            </p>
        </div>
    )
}

export default CustomInput