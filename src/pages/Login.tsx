import { Link, useNavigate } from "react-router"
import AuthLayout from "../layouts/AuthLayout"
import { Paths } from "../routes/paths"
import { errorMess } from "../utils/errorMess";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import CustomInput from "../components/UI/CustomInput";
import type { ILogin } from "../types";
import { useLoginMutation } from "../services/user";
import CustomBtn from "../components/UI/CustomBtn/CustomBtn";

// abd-1500
// test-1500@mail.ru
// Abdulla1500

const Login = () => {
  const loginMutation = useLoginMutation();
  const navigate = useNavigate()
  const [errorText, setErrorText] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILogin>({mode:'onChange'})
  
  const onSubmit: SubmitHandler<ILogin> = async (data) => { 
    try {
      await loginMutation.mutateAsync(data)
      console.log('Авторизация прошла успешно!');
      navigate(Paths.menu)
    } catch (error) {
      console.dir(error);
      setErrorText(errorMess(error));
    }
  }
  
  return (
    <>
       <AuthLayout>
        <div className="enter">
          <h1 className="enter__title">Вход</h1>
          <form action="" className="enter__form" onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              type="text"
              label="Ваш логин"
              placeholder="Логин"
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
              type="password"
              label="Ваш пароль"
              placeholder="Пароль"
              errors={errors.password}
              register={register('password', {
                required: {
                  value: true,
                  message: 'Это поле обязательное для заполнения'
                },
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов'
                }
              })} />
                        
            <CustomBtn
              text="Вход"
              width={248}
              className="enter__btn"
              disabled={!isValid}
            />
          </form>
          <div className="enter__info">
            {errorText && <h3 className="enter__error">{errorText}</h3>}
            <p className="enter__desc">Нет акканута?</p>
            <Link to={Paths.register} className="enter__link">Зарегистрироваться</Link>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default Login