import { Link, useNavigate } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import { Paths } from "../routes/paths"
import { useForm, type SubmitHandler } from "react-hook-form"
import type { IRegister } from "../types"
import CustomInput from "../components/UI/CustomInput"
import { useRegisterMutation } from "../services/user"
import { errorMess } from "../utils/errorMess"
import { useState } from "react"
import type { AxiosError } from "axios"
import CustomBtn from "../components/UI/CustomBtn/CustomBtn"

// abd-1500
// test-1500@mail.ru
// Abdulla1500

const Register = () => {
  const registerMutation = useRegisterMutation();
  const navigate = useNavigate()
  const [errorText, setErrorText] = useState('')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IRegister>({mode:'onChange'})
  
  const onSubmit: SubmitHandler<IRegister> = async (data) => { 
    try {
      await registerMutation.mutateAsync(data)
      console.log('Регистрация прошла успешно!');
      navigate(Paths.login)
    } catch (error) {
      console.dir(error);
      setErrorText(errorMess(error));
    }
  }
  
  const pass = watch('password')
  // console.log(pass);

  return (
    <>
      <AuthLayout>
        <div className="enter">
          <h1 className="enter__title">Регистрация</h1>
          <form action="" className="enter__form" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              type="text"
              label="Ваше имя"
              placeholder="Имя"
              errors={errors.username}
              register={register('username', {
                required: {
                  value: true,
                  message: 'Это поле обязательное для заполнения'
                },
                minLength: {
                  value: 2,
                  message: 'Минимум 2 символа'
                }
              })} />
            <CustomInput
              type="email"
              label="Ваша почта"
              placeholder="Почта"
              errors={errors.email}
              register={register('email', {
                required: {
                  value: true,
                  message: 'Это пеле обязательное для заполнения'
                },
                minLength: {
                  value: 6,
                  message: 'Минимум 6 символов'
                }
              })} />
            <CustomInput
              type="password"
              label="Ваш пароль"
              placeholder="Ваш пароль"
              errors={errors.password}
              register={register('password', {
                required: {
                  value: true,
                  message: 'Это пеле обязательное для заполнения'
                },
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов'
                }
              })} />
            <CustomInput
              type="password"
              label="Повторите пароль"
              placeholder="Повторите пароль"
              errors={errors.password2}
              register={register('password2', {
                required: {
                  value: true,
                  message: 'Это пеле обязательное для заполнения'
                },
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов'
                },
                validate: (val)=> val == pass || 'Пароли не совпадают'
              })} />
            
            <CustomBtn
              text="Зарегистрироваться"
              width={248}
              className="enter__btn"
              disabled={!isValid}
            />
          </form>
          <div className="enter__info">
            {errorText && <h3 className="enter__error">{errorText}</h3>}
            <p className="enter__desc">Есть акканут?</p>
            <Link to={Paths.login} className="enter__link">Войти</Link>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default Register