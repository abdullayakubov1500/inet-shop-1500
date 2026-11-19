import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Paths } from "../routes/paths";
import { useCurrentUser } from "../services/user";
import { userStore } from "../store/userStore";

const PrivateRoute = () => {
    const {setUser} = userStore()
    const access_token = localStorage.getItem('access_token');
    const navigate = useNavigate()
    const {data} = useCurrentUser();
    // console.log(data);
    useEffect(()=>{
      if (data) {
        setUser(data)
      }
    }, [data])
    useEffect(()=>{
        if (!access_token) {
            navigate(Paths.login)
        }
    }, [access_token])
  return (
    <Outlet/>
  )
}

export default PrivateRoute