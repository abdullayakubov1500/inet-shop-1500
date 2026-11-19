import { createBrowserRouter } from "react-router";
import { Paths } from "./paths";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../HOC/PrivateRoute";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import PublicRoute from "../HOC/PublicRoute";
import MenuProduct from "../pages/MenuProduct";

export const router = createBrowserRouter([
  { 
    path: Paths.menu, 
    Component: PrivateRoute,
    children: [
      {index: true, Component: Menu}
    ] 
  },
  { 
    path: Paths.menuProduct, 
    Component: PrivateRoute,
    children: [
      {index: true, Component: MenuProduct}
    ] 
  },
  { 
    path: Paths.cart, 
    Component: PrivateRoute,
    children: [
      {index: true, Component: Cart}
    ] 
  },
  { 
    path: Paths.profile, 
    Component: PrivateRoute,
    children: [
      {index: true, Component: Profile}
    ] 
  },
  { 
    path: Paths.login, 
    Component: PublicRoute,
    children: [
      {index: true, Component: Login}
    ] 
  },
  { 
    path: Paths.register, 
    Component: PublicRoute,
    children: [
      {
        index: true,
        Component: Register 
      }
    ]
  },
]);